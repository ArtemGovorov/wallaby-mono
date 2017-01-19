# wallaby-mono
A repository that demonstrates a bug or at lest unexpected behavior with wallaby and a mono repo.

# installation
```
git clone https://github.com/thuey/wallaby-mono.git
cd wallaby-mono
npm i
```

# overview
This is a monorepo with a single module: /packages/wallaby-mono-a. When I try to run wallaby for this module, wallaby gives the following error:
```
Error: Cannot find module 'chai'
at Object.<anonymous> test/test.js:1:0
```
I believe this is because it does not allow requires to traverse upwards to find chai at the root of the repository.
