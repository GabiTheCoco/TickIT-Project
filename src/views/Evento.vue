<script setup>
    import Button from '@/components/Button.vue';


</script>

<template>
    <section class="min-h-[89%] p-6 flex justify-between items-center  2xl:p-12 ">
        <div class="h-full w-1/3 p-4">
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
        <div class="h-full w-5/6 px-4 flex flex-col items-start">
            <h1 class="text-4xl font-semibold text-azul-oscuro">Reunion X</h1>
            <div class="flex flex-col justify-evenly h-3/5 w-full">
                <h2 class="font-medium text-xl text-azul-oscuro">Descripcion</h2>
                <textarea class="max-h-36 border-2 p-2 outline-azul-oscuro/30 resize-none" placeholder="Ingrese una descripción..."></textarea>
                <div class="flex justify-start gap-4 items-center">
                    <Button class="h-10" bgColor="bg-azul-oscuro" text="Guardar" textColor="text-white"></Button>
                    <Button class="h-10 border-azul-oscuro border-2" textColor="text-azul-oscuro"  text="Cancelar"></Button>
                </div>
            </div>
            <div class="flex flex-col justify-evenly h-2/5 w-full">
                <h2 class="font-medium text-xl text-azul-oscuro">Comentarios</h2>
                <textarea class="border-2 p-2 outline-azul-oscuro/30 resize-none h-auto" placeholder="Ingrese un comentario..."></textarea>
                <div class="flex justify-start gap-4 items-center">
                    <Button class="h-10" bgColor="bg-azul-oscuro" text="Guardar" textColor="text-white"></Button>
                    <Button class="h-10 border-azul-oscuro border-2" textColor="text-azul-oscuro"  text="Cancelar"></Button>
                </div>
            </div>
        </div>
    </section>
</template>