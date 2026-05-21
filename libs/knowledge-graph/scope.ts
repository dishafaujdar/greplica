import type { GraphScopeId, MemoryCommitId, SubjectType } from "./schema.js";

export type GraphScopeKind = "main" | "branch" | "session" | "source";

export interface GraphScope {
  id: GraphScopeId;
  kind: GraphScopeKind;
  name: string;
  parent_scope_id?: GraphScopeId;
  ref?: string;
  created_at: string;
}

export interface GraphMembership {
  scope_id: GraphScopeId;
  subject_type: SubjectType;
  subject_id: string;
  memory_commit_id?: MemoryCommitId;
}
