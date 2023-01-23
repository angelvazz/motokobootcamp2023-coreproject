export const idlFactory = ({ IDL }) => {
  const Proposal = IDL.Record({
    'title' : IDL.Text,
    'content' : IDL.Text,
    'owner' : IDL.Text,
  });
  return IDL.Service({
    'createProposal' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
    'readProposal' : IDL.Func([], [IDL.Vec(Proposal)], ['query']),
    'removeProposal' : IDL.Func([IDL.Nat], [], ['oneway']),
    'seeProposal' : IDL.Func([IDL.Nat], [IDL.Vec(Proposal)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
