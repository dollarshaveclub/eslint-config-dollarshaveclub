
> What changed? 

> Are there gotchas?

---

<details>

<summary>Pull Request Todo</summary>

- [ ] Solicit reviews from domain experts or others outside this PR's squad
<!-- Add a list of remaining TODOs for this PR to be done so others know the status of this PR -->

</details>


<details>

<summary>Post-Deploy Todo</summary>

- [ ] Monitor exceptions in Sentry – https://goo.gl/gB1t9Z
- [ ] Monitor key metrics like pixel fires and asset sizes – https://goo.gl/BkVpRg
- [ ] Spot-check production – http://dollarshaveclub.com

_In the event an outage related to this PR occurs, rollback immediately, then debug: https://jenkins-deploy.aws.shave.io/job/Production/job/rollback/_

</details>


<details>

<summary>Code Review Guidelines</summary>

- Ensure readability and good organization
- Ensure classes, functions, components, and variables are well-named
- Ensure the diff is small
- Ensure this PR does only one thing
- Ensure the code is DRY (more than twice repeated)
- Ensure tricky code is removed or explained with a comment
- Ensure `TODO` comments and `WHY` comments are added where applicable

</details>
