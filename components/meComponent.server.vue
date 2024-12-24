<template>
  <div class="flex flex-row">
    <div class="flex-1">
      <p class="text-4xl font-semibold">{{ $t("homepage.welcome") }}</p>
      <p class="text-4xl font-semibold">{{ $t("homepage.name") }}</p>
      <span class="w-1">
        <span class="text-4xl text-colors-text-gray">{{
          $t("homepage.description")
        }}</span
        ><span class="text-4xl text-colors-text-gray">{{
          $t("homepage.descriptionAfter")
        }}</span>
      </span>
    </div>
    <div class="flex-2.5 align-end flex justify-end items-end min-w-24">
      <img
        src="/lorenz.png"
        alt="Lorenzo Cirelli"
        class="bg-images rounded-imageInit border-2 border-solid border-colors-text-main h-30"
      />
    </div>
  </div>
</template>
<script lang="ts"></script>
