import Debug "mo:base/Debug";
import List "mo:base/List";
import Principal "mo:base/Principal";
import Int = "mo:base/Int";
import Time = "mo:base/Time";
import HashMap "mo:base/HashMap";
import Result "mo:base/Result";
import Iter "mo:base/Iter";

actor Dapp {
  public type Proposal = {
    title : Text;
    content : Text;
    owner : Text;
    time : Text;
  };

  stable var proposal : List.List<Proposal> = List.nil<Proposal>();

  public shared (msg) func createProposal(titleText : Text, contentText : Text) {
    let owner = msg.caller;
    let now = Time.now();
    let elapsedSeconds = now / 1000_000_000;
    let newProposal : Proposal = {
      title = titleText;
      content = contentText;
      owner = Principal.toText(owner);
      time = Int.toText(elapsedSeconds)

    };
    proposal := List.push(newProposal, proposal);
    Debug.print(debug_show (proposal));
  };

  public query func readProposal() : async [Proposal] {
    return List.toArray(proposal);
  };

  public query func seeProposal(id : Nat) : async [Proposal] {
    let result : [Proposal] = List.toArray(proposal);
    return [result[id]];
  };

  public func removeProposal(id : Nat) {
    let listFront = List.take(proposal, id);
    let listBack = List.drop(proposal, id + 1);
    proposal := List.append(listFront, listBack);
  };

  let owner : Principal = Principal.fromText("kvewd-ktbx3-pgqog-ug7kj-crdos-uxb6z-zc5i6-bgryf-gpdii-zdhid-xqe");

  let totalSupply : Nat = 10000;

  let symbol : Text = "MB";

  private stable var balancesEntries : [(Principal, Nat)] = [];

  private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
  if (balances.size() < 1) {
    balances.put(owner, totalSupply);
  };

  public query func balanceOf(who : Principal) : async Nat {
    let balance : Nat = switch (balances.get(who)) {
      case null 0;
      case (?result) result;
    };
    return balance;
  };

  public query func getSymbol() : async Text {
    return symbol;
  };

  public shared (msg) func payOut() : async Text {
    //Debug.print(debug_show (msg.caller));
    if (balances.get(msg.caller) == null) {
      let amount = 1;
      let result = await transfer(msg.caller, amount);
      return result;
    } else {
      return "You have allready received the tokens";
    };
  };

  public shared (msg) func transfer(to : Principal, amount : Nat) : async Text {
    let fromBalance : Nat = await balanceOf(msg.caller);
    if (fromBalance > amount) {
      // Persona que manda los tokens
      let newFromBalance : Nat = fromBalance - amount;
      balances.put(msg.caller, newFromBalance);

      //Persona que los recibe
      let toBalance = await balanceOf(to);
      let newToBalance : Nat = toBalance + amount;
      balances.put(to, newToBalance);

      return "Success";
    } else {
      return "You dont have enough to transfer";
    };
  };

  system func preupgrade() {
    balancesEntries := Iter.toArray(balances.entries());
  };

  system func postupgrade() {
    balances := HashMap.fromIter<Principal, Nat>(balancesEntries.vals(), 1, Principal.equal, Principal.hash);
    if (balances.size() < 1) {
      balances.put(owner, totalSupply);
    };
  };
};
