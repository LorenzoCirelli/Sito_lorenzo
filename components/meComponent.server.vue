<template>
  <div class="flex flex-col-reverse gap-7 sm:flex-row">
    <div class="flex-1">
      <div>
        <p class="text-3xl font-medium sm:text-4xl">
          {{ $t("homepage.welcome") }}
        </p>
        <span class="text-3xl font-medium sm:text-4xl">
          {{ $t("homepage.conn") }}
        </span>
        <span class="text-3xl font-semibold text-colors-text-color sm:text-4xl">
          {{ $t("homepage.name") }}
        </span>
        <div class="text-2xl text-colors-text-gray sm:text-3xl">
          <span class="text-semibold">{{ $t("homepage.description") }}</span
          >{{ $t("homepage.conn2") }}{{ tempo }}
          {{ $t("homepage.descriptionAfter") }}
        </div>
      </div>
      <div>
        <ButtonPortfoglio></ButtonPortfoglio>
      </div>
    </div>
    <div
      class="flex-2 flex align-middle items-center justify-center sm:justify-end"
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
import itDayjs from "~/i18n/itDayjs";
dayjs.locale(itDayjs);
const tempo = dayjs("2023-08-21").fromNow(true);
</script>
