import type { Principal } from '@dfinity/principal';
export interface Proposal {
  'title' : string,
  'content' : string,
  'owner' : string,
}
export interface _SERVICE {
  'createProposal' : (arg_0: string, arg_1: string) => Promise<undefined>,
  'readProposal' : () => Promise<Array<Proposal>>,
  'removeProposal' : (arg_0: bigint) => Promise<undefined>,
  'seeProposal' : (arg_0: bigint) => Promise<Array<Proposal>>,
}
