<script setup>
    import Button from '@/components/Button.vue';


</script>

<template>
    <section class="min-h-[89%] p-6 flex justify-between items-center  2xl:p-12 ">
        <div class="h-full w-2/5 p-4">
            <div class="w-full h-5/6 flex flex-col justify-start gap-10 text-gray-500">
                <Button class="shadow-lg border-2 border-azul-oscuro w-72 self-center text-azul-oscuro" text="Volver atras paper"></Button>
                <div class="flex justify-between">
                    <p>Tipo evento:</p>
                    <p class="font-medium">Reunion</p>
                </div>
                <div class="flex justify-between">
                    <p>Informante:</p>
                    <p class="font-medium">Lautaro, PM</p>
                </div>
                <div class="flex justify-between">
                    <p>Etiquetas:</p>
                    <input type="text" class="font-medium border-2 rounded-md p-1 outline-azul-oscuro/30">
                </div>
                <div class="flex justify-end">
                    <p class="font-medium">Creado hace 20 horas</p>
                </div>
                <div class="flex justify-end">
                    <p class="font-medium">Actualizado hace 19 horas</p>
                </div>
            </div>
        </div>
        <span class="border-r-2 border-gray-200 h-full"></span>
        <div class="h-full w-5/6 px-4 flex items-start">

        </div>
    </section>
</template>