<template>
  <div class="flex flex-col-reverse gap-7 sm:flex-row">
    <div class="flex-1">
      <div>
        <p class="text-3xl font-semibold sm:text-4xl">
          {{ $t("homepage.welcome") }}
        </p>
        <p class="text-3xl font-semibold sm:text-4xl">
          {{ $t("homepage.name") }}
        </p>
        <span class="text-2xl text-colors-text-gray sm:text-3xl"
          >{{ $t("homepage.description") }}{{ tempo }}
          {{ $t("homepage.descriptionAfter") }}</span
        >
      </div>
      <div>
        <ButtonPortfoglio></ButtonPortfoglio>
      </div>
    </div>
    <div
      class="flex-3 flex align-middle items-center justify-center sm:justify-end"
    >
      <img
        src="/lorenz.png"
        alt="Lorenzo Cirelli"
        width="200px"
        class="bg-images rounded-imageInit border-2 border-solid content-center flex-none align-center border-colors-text-main aspect-square"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import dayjs from "#build/dayjs.imports.mjs";

const tempo = dayjs("2023-08-21").fromNow(true);
</script>
