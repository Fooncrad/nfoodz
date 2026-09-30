# Branch behavior

The first branch is created automatically and is primary. Public clients do not need a branch picker while only one active branch exists. When a second active branch exists, the API returns selectionRequired=true and the client can present branch selection.

Every branch operation is tenant-scoped on the server.
