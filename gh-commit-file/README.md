# Usage

:information_source: Requires the `contents: write` permission.

```yml
- name: Commit single file
  uses: pafcloud/helper-actions/gh-commit-file@<release>
  with:
    repo: some-org/foo
    branch: such/feature
    path: path/to/file.txt
    message: Updating a file
    github-token: ${{ secrets.SOME_TOKEN }}
```
