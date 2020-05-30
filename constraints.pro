gen_enforced_dependency(WorkspaceCwd, DependencyIdent, null, dependencies) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, _, dependencies).

gen_enforced_dependency(WorkspaceCwd, DependencyIdent, null, devDependencies) :-
  workspace_has_dependency(WorkspaceCwd, DependencyIdent, _, devDependencies),
  DependencyIdent \= '@types/jest', 
  DependencyIdent \= '@types/node', 
  DependencyIdent \= '@typescript-eslint/eslint-plugin', 
  DependencyIdent \= '@typescript-eslint/parser', 
  DependencyIdent \= 'eslint', 
  DependencyIdent \= 'jest', 
  DependencyIdent \= 'prettier', 
  DependencyIdent \= 'ts-jest', 
  DependencyIdent \= 'ts-node', 
  DependencyIdent \= 'typescript'.