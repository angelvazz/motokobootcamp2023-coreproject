import Debug "mo:base/Debug";
import List "mo:base/List";
import Principal "mo:base/Principal";
import Int = "mo:base/Int";
import Time = "mo:base/Time";

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
};
