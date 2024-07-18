<style lang="scss">
/* HTML: <div class="film-strip"></div> */
.film-strip {
  --s: 12px; /* control the size */
  --c: #222;
 
  width: calc(20*var(--s));
  aspect-ratio: 1.25;
  background: 
    conic-gradient(at 50% var(--s),var(--c) 75%,#0000 0) 
    0 0/calc(2*var(--s)) calc(100% - var(--s)) padding-box;
  border: var(--s) solid var(--c);
  padding: calc(var(--s)*2.5) calc(var(--s)*1.5);
  box-sizing: content-box;
  /* you can add a filter for an oldish effect 
  filter: sepia(1) brightness(0.9) grayscale(.2);
  */
}</style>
<template>
    <div class="film-strip">
        
    </div>
</template>