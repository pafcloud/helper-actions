# Usage

```yml
- name: Commit file
  uses: pafcloud/helper-actions/commit-file@<release>
  with:
    repo: pafcloud/foo
    branch: such/feature
    path: path/to/file.txt
    message: Updating a file
    github-token: <token>
```
