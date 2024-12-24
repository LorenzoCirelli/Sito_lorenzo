<template>
  <div class="flex flex-col-reverse gap-7 sm:flex-row">
    <div class="flex-1">
      <p class="text-4xl font-semibold">{{ $t("homepage.welcome") }}</p>
      <p class="text-4xl font-semibold">{{ $t("homepage.name") }}</p>
      <span class="text-4xl text-colors-text-gray"
        >{{ $t("homepage.description") }}{{ tempo }}
        {{ $t("homepage.descriptionAfter") }}</span
      >
      <ButtonPortfoglio></ButtonPortfoglio>
    </div>
    <div class="flex-2.5 align-end flex  items-end min-w-24 justify-center sm:justify-end">
      <img
        src="/lorenz.png"
        alt="Lorenzo Cirelli"
        class="bg-images rounded-imageInit border-2 border-solid border-colors-text-main h-30"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from "#build/dayjs.imports.mjs";

const tempo = dayjs("2023-08-21").fromNow(true);
</script>
