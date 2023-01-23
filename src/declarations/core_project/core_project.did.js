export const idlFactory = ({ IDL }) => {
  const Proposal = IDL.Record({
    'title' : IDL.Text,
    'content' : IDL.Text,
    'owner' : IDL.Text,
    'time' : IDL.Text,
  });
  return IDL.Service({
    'balanceOf' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'createProposal' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
    'getSymbol' : IDL.Func([], [IDL.Text], ['query']),
    'payOut' : IDL.Func([], [IDL.Text], []),
    'readProposal' : IDL.Func([], [IDL.Vec(Proposal)], ['query']),
    'removeProposal' : IDL.Func([IDL.Nat], [], ['oneway']),
    'seeProposal' : IDL.Func([IDL.Nat], [IDL.Vec(Proposal)], ['query']),
    'transfer' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
