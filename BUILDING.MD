Building Meatspace
==================

This little "workflow" will install a git pre-commit hook, and if a commit occurs it will run the build script.

Installing
----------

To add the pre-commit hook, just run

```javascript
grunt
```

Using it
--------

After every single commit, now the build script will run, and regenerate the index.html. But you have to push that to
github too!


TODO
----

Maybe adding a grunt job to commit&push the index.html as well? :)
