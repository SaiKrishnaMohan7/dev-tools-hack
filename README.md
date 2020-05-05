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

## DOM breakpoints

You can add breakponts on DOM chnages, not JS breakpoint but a DOM breakpoint. In `Elements` tab go to any element, right click and `Break on`, pick the option that best suits your use case

- These breakpoints can be viewed in the DOM breakpoints section on the RHS

## Event listeners

We can find what event listeners are on a page in the `Event Listeners` tab on the RHS. Convenientlty takes you to where the event listener is or the handler is.

## Blackboxing scripts

Very cool feature! You can instruct the devTools to _hide_ third party scripts, like React or d3 etc., this reduces the amount code that is irrelevant to your problem. In the `Call Stack` section this appears as `We hid 20 script calls` or something like that. Can be domne from the `Call Stack` section on RHS, right-click --> Blackbox scripts

## Conditional breakpoint

Pause execution when a certain condition is met!

- Say there's a scrip that does the AJAX calls for you but you want to pause execution only when say making a `user` call or the input to a fucntion _matches_ a cretain string or whatever.
- Right click instead of left clicking when adding a breakpoint

## Log points

Another special kinda breakpoint. Log to the console WITHOUT a console log! No more console logs left in code base!

- Accessible by right click when adding a breakpoint, the breakpioint editor pops open, here add the variable to log. *ProTip: wrap the var in an object to log out its name and value*
- [More here](https://developers.google.com/web/updates/2019/01/devtools#logpoints)
- [VERY INTERESTING](https://medium.com/frontmen/art-of-debugging-with-chrome-devtools-ab7b5fd8e0b4#a4f3)

## XHR Breakpoints

Pause Execution when requesting a url and the url matches a string of your choice!

## Network Tab Color Codes

-- [SRC](https://slides.com/jkup/devtools/#/13/10)

- WHITE
  - HTTP1.1 allows for _6 TCP connections per origin_, whatever falls out of this is placed in a queue
  - `css` and `js` are given higher priority by the browser for fetch
  - This is why bundling is preferred. Bundling puts all the css and script files into one file so that the browser can GET them instead of waiting

- GREY -dark
  - Waiting/Stalled

- GREY -light
  - Proxy negotiation: req is done queueing =, has been sent out but hasn't hit the actual server; Proxy is slow

- GREYish GREEN
  - DNS Lookup: quick; can be cached

- ORANGE
  - Initial Connection/Connecting: Time it took to establish a connection, including TCP handshakes and negotiating a SSL

- ORANGE -dark, brownish
  - SSL negotiation

- GREEN
  - Time spent issuing a network req

- GREEN
  - Time spent waiting for the initial response, also known as the Time To First Byte. This time captures the latency of a round trip to the server in addition to the time spent waiting for the server to deliver the response

- BLUE
  - Content downloading

## Perfromance

- For CPU: as short as possible; for Memory:P as long as possible
  - For memory, JS heap size increaces with time and hence the recording window should be long (jigsaw pattern)
