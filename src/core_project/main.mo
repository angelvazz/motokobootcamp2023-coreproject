import Debug "mo:base/Debug";
import List "mo:base/List";
import Principal "mo:base/Principal";

actor Dapp {
  public type Proposal = {
    title : Text;
    content : Text;
    owner : Text;
  };

  stable var proposal : List.List<Proposal> = List.nil<Proposal>();

  public shared (msg) func createProposal(titleText : Text, contentText : Text) {
    let owner = msg.caller;
    let newProposal : Proposal = {
      title = titleText;
      content = contentText;
      owner = Principal.toText(owner);
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
