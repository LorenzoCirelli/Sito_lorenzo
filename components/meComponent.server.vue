<template>
  <div class="flex flex-row">
    <div class="flex-1">
      <p class="text-4xl font-semibold">{{ $t("homepage.welcome") }}</p>
      <p class="text-4xl font-semibold">{{ $t("homepage.name") }}</p>
      <span>{{ $t("homepage.description") }}</span
      ><span>{{ $t("homepage.descriptionAfter") }}</span>
    </div>
    <div class="flex-1 align-end flex justify-end items-end">
      <img
        src="/lorenz.png"
        alt="Lorenzo Cirelli"
        class="bg-images rounded-imageInit border-2 border-solid border-colors-text-main h-30"
      />
    </div>
  </div>
</template>
<script lang="ts"></script>
