# Usage

```yml
- name: Commit file
  uses: pafcloud/helper-actions/commit-file@<release>
  with:
    file-path: path/to/file.txt
    git-branch: my-branch
    commit-message: Updating file.txt
    github-token: <some token>
```
