<template>
  <div>
    <div class="text-green-700 uppercase font-bold text-xl pb-1">Projects</div>
    <div class="pl-12 flex flex-col gap-8">
      <div class="flex flex-col gap-2">
        <div class="font-medium text-lg text-Blue-Green">SpotlightENSAT —<span class="text-base font-light"> Webinar platform</span></div>
        <img src="../assets/spotlight2.png" alt="screenshot of spotlightensat website" class="rounded-md w-3/4 mx-auto" />
        <a class="hover:underline hover:text-green-400" href="https://spotlightensat.netlify.app/"><i class="ri-external-link-fill"></i> spotlightensat</a>
        <div>A progressive webApp for posting, sharing and managing webinars using VueJs v3, Tailwind, Firebase, MongoDB realm and more.</div>
        <a class="hover:underline hover:text-green-400 font-light text-sm" href="https://docs.google.com/document/d/1vPADmQg9OYMWg5a7GHy_B3kmSeG7AChKpABvJWbdCpY/edit?usp=sharing"
          >(<i class="ri-external-link-fill"></i> for more information read this online document)</a
        >
        <div id="sep" class="bg-gradient-to-r from-Blue-Green to-Illuminating-Emerald h-1 mt-8 w-5/6 mx-auto"></div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="font-medium text-lg text-Blue-Green">1PMApp —<span class="text-base font-light"> Simple project management and collaboration</span></div>
        <img src="../assets/1pmapp.png" alt="screenshot of 1pmapp website" class="rounded-md w-3/4 mx-auto" />
        <a class="hover:underline hover:text-green-400" href="https://1pmapp.netlify.app/"><i class="ri-external-link-fill"></i> 1pmapp</a>
        <div>A simple webApp for managing projects with real time collaboration capabilities using VueJs v3, Firebase realtime db </div>
        <div id="sep" class="bg-gradient-to-r from-Blue-Green to-Illuminating-Emerald h-1 mt-8 w-5/6 mx-auto"></div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="font-medium text-lg text-Blue-Green">Metix —<span class="text-base font-light"> Students’ marks management</span></div>
        <img src="../assets/metix.png" alt="screenshot of metix website" class="rounded-md w-3/4 mx-auto" />
        <a class="hover:underline hover:text-green-400" href="https://metix.netlify.app/"><i class="ri-external-link-fill"></i> metix</a>
        <div>A webApp for managing students' marks using VueJs v3, TailwindCss and localForage</div>
        <div id="sep" class="bg-gradient-to-r from-Blue-Green to-Illuminating-Emerald h-1 mt-8 w-5/6 mx-auto"></div>
      </div>
    </div>
  </div>
</template>

<style>
#sep{
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 1800% 1800%;
  animation: rainbow 18s ease infinite;
}

@keyframes rainbow { 
    0%{background-position:0% 82%}
    50%{background-position:100% 19%}
    100%{background-position:0% 82%}
}
</style>