# Chrome DevTools

One of the most important tools in a dev's toolbox

## Mounting Project to the internal FS

The dev tools has the option of letting you uplload the project you are working on to it's file system!

- Here, it builds a mapping between your files and the files in the Chrome file system
- You can figure out whihc annoying style is wining in `Computed Styles` section, this will show you which style is winning and where it coming from. Support `SASS, LESS and SCSS`.
- Any chnages made to the RHS in the devtools, like styles, those changes end up persisting!
  - Caveat: Anything on the left won't persist, like changing markup, you'd need to go to `Sources` and edit there, that persists
  - Caveat: To the RHS, adding a brand new style won't persist
  - *RULE: Only files that are mapped, to the RHS, are chnage persistent. LHS, go to sources and edit*
