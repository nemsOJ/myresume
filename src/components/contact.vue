<template>
  <div class="flex flex-col gap-4">
    <div>
      <div class="flex flex-row gap-2 text-lg text-Ocean-Green">
        <i class="ri-mail-send-fill"></i>
        <div class="uppercase font-semibold pb-1">Emails :</div>
      </div>
      <div class="pl-10">
        <div>mohammedkarim.sisti@etu.uae.ac.ma</div>
        <div>mohammedkarimsisti@gmail.com</div>
      </div>
    </div>
    <div>
      <div class="flex flex-row gap-2 text-Ocean-Green text-lg">
        <i class="ri-phone-fill"></i>
        <div class="uppercase font-semibold pb-1">Phone number :</div>
      </div>
      <div class="pl-10">(+212) 0639943470</div>
    </div>
    <div class="sep bg-gradient-to-r from-Blue-Green to-Illuminating-Emerald h-1 mt-4 w-5/6 mx-auto"></div>
    <div class="w-full">
      <div class="capitalize text-lg font-medium py-4">Or contact me through this form :</div>
      <div class="flex flex-col gap-8 w-2/3 mx-auto">
        <div class="flex flex-col gap-2 uppercase focus-within:text-Ocean-Green">
          <label class="transition duration-300 font-bold text-lg" for="name">company name :</label>
          <input
            v-model="companyName"
            class="transition duration-300 rounded-tl-md rounded-br-md py-2 px-4 bg-gray-400 appearance-none border-2 border-gray-400 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-Ocean-Green"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div class="flex flex-col gap-2 uppercase focus-within:text-Ocean-Green">
          <label class="transition duration-300 font-bold text-lg" for="body">body :</label>
          <textarea
            v-model="emailBody"
            class="transition duration-300 rounded-tl-md rounded-br-md py-2 px-4 bg-gray-400 appearance-none border-2 border-gray-400 text-gray-700 leading-tight focus:outline-none focus:bg-gray-200 focus:border-Ocean-Green"
            name="body"
            id="body"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div class="">
          <div
            @click="sendEmail"
            class="py-3 rounded-tl-md rounded-br-md bg-Blue-Green text-center text-gray-800 font-semibold text-lg cursor-pointer transition duration-300 hover:bg-Ocean-Green"
          >
            Send Email
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendMail } from "../js/emailClient";
export default {
  name: "contact",
  data() {
    return {
      companyName: "",
      emailBody: "",
    };
  },
  methods: {
    async sendEmail() {
      console.log(
        await sendMail(
          `NEW EMAIL FROM : ${this.companyName}`,
          `<h2 style="font-size:1.25rem; color:#0E2E5E; margin:1rem 2rem; font-weight:700"> Email Body </h2>
          <p style="margin-left:1rem;">${this.emailBody}</p>`
        )
      );
      this.emailBody = this.companyName = "";
    },
  },
};
</script>

<style>
.sep {
  @apply rounded-md;
  background: linear-gradient(124deg, #ff2400, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 1800% 1800%;
  animation: rainbow 18s ease infinite;
}

@keyframes rainbow {
  0% {
    background-position: 0% 82%;
  }
  50% {
    background-position: 100% 19%;
  }
  100% {
    background-position: 0% 82%;
  }
}
</style>
