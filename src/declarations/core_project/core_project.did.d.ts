import type { Principal } from '@dfinity/principal';
export interface Proposal {
  'title' : string,
  'content' : string,
  'owner' : string,
  'votes' : bigint,
  'time' : string,
}
export interface _SERVICE {
  'balanceOf' : (arg_0: Principal) => Promise<bigint>,
  'createProposal' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'getSymbol' : () => Promise<string>,
  'payOut' : () => Promise<string>,
  'readProposal' : () => Promise<Array<Proposal>>,
  'removeProposal' : (arg_0: bigint) => Promise<undefined>,
  'seeProposal' : (arg_0: bigint) => Promise<Array<Proposal>>,
  'transfer' : (arg_0: Principal, arg_1: bigint) => Promise<string>,
  'voteProposal' : (arg_0: bigint) => Promise<undefined>,
}
