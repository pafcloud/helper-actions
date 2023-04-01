# Usage

```yml
- name: Commit file
  uses: pafcloud/helper-actions/commit-file@<release>
  with:
    repo: pafcloud/foo
    git-branch: my-branch
    file-path: path/to/file.txt
    commit-message: Updating file.txt
    github-token: <some token>
```
