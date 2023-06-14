<template>
<div class="hero min-h-screen" style="background-image: url(https://almatypolytech.edu.kz/assets/img/1.JPG);">
  <div class="hero-overlay bg-opacity-70"></div>
  <div class="hero-content text-center text-neutral-content">
    <div id="glass" class="max-w-3xl p-20">
      <h1 class="mb-5 text-5xl font-bold">Добро пожаловать в Polytech!</h1>
      <p class="mb-5 text-focus-in">Выбор квалификации — серьезный шаг юных соискателей после окончания школы. В действительности, чтобы стать компетентным специалистом, необязательно оканчивать высшее учебное заведение. Довольно быстрый способ реализовать себя в выбранной специальности и приобрести профессиональное образование — это зачисление в колледж.</p>
      <button class="btn btn-primary text-focus-in" onclick="my_modal_2.showModal()">Почему мы?</button>
      <dialog id="my_modal_2" class="modal">
        <form method="dialog" class="modal-box">
          <section  class="">
          <div class="flex flex-wrap items-center">
            <div class="mb-6 w-full">
              <h2 class="mb-6 text-3xl mt-6 font-bold">
                Почему<u class="text-primary dark:text-primary-400">
                  мы?</u>
              </h2>

              <p class="mb-12 text-neutral-500 dark:text-neutral-300">
                Данный колледж славится своей высокой академической репутацией.
                        Он предлагает качественные образовательные программы, которые обеспечивают
                        студентам фундаментальные знания и навыки в выбранной области.
              </p>
            </div>
          </div>
          </section>
        </form>
        <form method="dialog" class="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  </div>
</div>  
</template>

<style>
#glass {
background: rgba(121, 121, 141, 0.1);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
backdrop-filter: blur(4px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>