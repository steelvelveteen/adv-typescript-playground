Run 'npm run watch' if you're running in the browser or
Run 'tsc <file.ts>' to run the specific file and then run 'node <file.js>' which is the compiled generated file.
ts-node is an option but apparently it doesn't support ES6 modules

Another way is using Deno with 'deno run path/to/file.ts' and it will run typesript files in a single command without compiling it to a separate js file
- Install deno using the curl command found in the official website
- Update .zshrc (.bashrc) with these two lines:
    export DENO_INSTALL="/home/$USER/.deno"
    export PATH="$DENO_INSTALL/bin:$PATH"

Using deno to run in watch mode:
'deno run --unstable --watch <file.ts>' and voila!