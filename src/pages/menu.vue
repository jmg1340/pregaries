<template>
  <q-menu class="" style="min-width: 500px">
    <q-list separator>

      <q-item class="bg-black text-white" v-close-popup>
        <q-item-section>
          <q-item-label class="text-bold text-white text-center" header dense>
            MENU
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-toggle v-model="darkMode" color="orange" keep-color label="Tema fosc" @update:model-value="toggleDarkMode" />
        </q-item-section>
      </q-item>





      <q-item active-class="my-menu-link" class="tipusLletraApp"
        :class="{ 'text-black': !$q.dark.mode, 'text-orange bg-grey-10': $q.dark.mode }" ripple to="/favorits"
        v-close-popup>
        <!-- icona item -->
        <q-item-section avatar>
          <q-icon name="favorite" class='text-red-7' />
        </q-item-section>

        <!-- Text del item -->
        <q-item-section class="">
          <q-item-label>Favorits</q-item-label>
          <q-item-label caption>Pregàries preferides</q-item-label>
        </q-item-section>
      </q-item>




      <q-item active-class="my-menu-link" class="tipusLletraApp"
        :class="{ 'text-black': !$q.dark.mode, 'text-orange bg-grey-10': $q.dark.mode }" ripple to="/"
        v-close-popup>
        <!-- icona item -->
        <q-item-section avatar>
          <q-icon name="article" />
        </q-item-section>

        <!-- Text del item -->
        <q-item-section class="">
          <q-item-label>Pregàries</q-item-label>
          <q-item-label caption>Classificació / Cercador</q-item-label>
        </q-item-section>
      </q-item>



      
      <q-item active-class="my-menu-link" class="tipusLletraApp"
        :class="{ 'text-black': !$q.dark.mode, 'text-orange bg-grey-10': $q.dark.mode }" ripple to="/examen"
        v-close-popup>
        <!-- icona item -->
        <q-item-section avatar>
          <q-icon name="checklist" />
        </q-item-section>

        <!-- Text del item -->
        <q-item-section class="">
          <q-item-label>Examen de consciència</q-item-label>
          <q-item-label caption></q-item-label>
        </q-item-section>
      </q-item>





      <q-item active-class="my-menu-link" class="tipusLletraApp"
        :class="{ 'text-black': !$q.dark.mode, 'text-orange bg-grey-10': $q.dark.mode }" clickable
        >
        <!-- icona item -->
        <q-item-section avatar>
          <!-- <q-icon name="" /> -->
        </q-item-section>

        <!-- Text del item -->
        <q-item-section class="">
          <q-item-label>Lliures en Crist</q-item-label>
          <q-item-label caption>font: www.libertadencristo.org</q-item-label>
        </q-item-section>

        <!-- icona fletxeta dreta indicant submenu -->
        <q-item-section side>
          <q-icon name="keyboard_arrow_right" />
        </q-item-section>


        <!--  ***** SUBMENU ***** -->
        <q-menu anchor="top end" self="top start">
          <q-list separator>

            <q-item active-class="my-menu-link" class="tipusLletraApp"
            :class="{ 'text-black': !$q.dark.mode, 'text-orange bg-grey-10': $q.dark.mode }" ripple to="/quiSocEnCrist"
            clickable v-close-popup
            >
              <!-- icona item -->
              <q-item-section avatar>
                <q-icon name="sentiment_satisfied_alt" />
              </q-item-section>

              <!-- Text del item -->
              <q-item-section class="">
                <q-item-label>Qui soc en Crist?</q-item-label>
                <q-item-label caption></q-item-label>
              </q-item-section>
            </q-item>


            <q-item active-class="my-menu-link" class="tipusLletraApp"
            :class="{ 'text-black': !$q.dark.mode, 'text-orange bg-grey-10': $q.dark.mode }" ripple to="/elMeuPareDeu"
            clickable v-close-popup
            >
              <!-- icona item -->
              <q-item-section avatar>
                <q-icon name="sentiment_satisfied_alt" />
              </q-item-section>

              <!-- Text del item -->
              <q-item-section class="">
                <q-item-label>El meu pare Déu</q-item-label>
                <q-item-label caption></q-item-label>
              </q-item-section>
            </q-item>


            <q-item active-class="my-menu-link" class="tipusLletraApp"
            :class="{ 'text-black': !$q.dark.mode, 'text-orange bg-grey-10': $q.dark.mode }" ripple to="/vintVeritats"
            clickable v-close-popup
            >
              <!-- icona item -->
              <q-item-section avatar>
                <q-icon name="format_list_numbered" />
              </q-item-section>

              <!-- Text del item -->
              <q-item-section class="">
                <q-item-label>20 veritats espirituals</q-item-label>
                <q-item-label caption></q-item-label>
              </q-item-section>
            </q-item>


          </q-list>
        </q-menu>
      </q-item>



      <q-item active-class="my-menu-link" class="tipusLletraApp"
        :class="{ 'text-black': !$q.dark.mode, 'text-orange bg-grey-10': $q.dark.mode }" ripple to="/formulari"
        v-close-popup
        >
        <!-- icona item -->
        <q-item-section avatar>
          <q-icon name="send" />
        </q-item-section>

        <!-- Text del item -->
        <q-item-section class="">
          <q-item-label>Enviar pregària</q-item-label>
          <q-item-label caption>Ajuda'ns a ampliar les pregàries</q-item-label>
        </q-item-section>
      </q-item>






    </q-list>
  </q-menu>
</template>


<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useQuasar } from "quasar";

export default defineComponent({
  
  setup(){
    const $q = useQuasar();
    const darkMode = ref(false)

    onMounted(() => {
      try {
        console.log('$q.localStorage.getItem("keyDarkMode")', $q.localStorage.getItem("keyDarkMode"));
        darkMode.value = JSON.parse($q.localStorage.getItem("keyDarkMode")) || false
        console.log("darkMode", darkMode.value)
        $q.dark.set(darkMode.value)

      } catch (error) {
        console.log("Error possiblement produit per 'keyDarkMode' NO DEFINIDA")
        console.log(error)
      }
    })

    return {

      darkMode,
      toggleDarkMode () {
        $q.dark.set(darkMode.value)

        try {
          $q.localStorage.set("keyDarkMode", JSON.stringify(darkMode.value))
        } catch (e) {
          console.log("ERROR AL GUARDAR localhost")
          console.log(e)
        }


      }
    };



  }

})
</script>


<style lang="scss" scoped>
	.my-menu-link {
  	background-color: $yellow-11;
		font-size: 130%;
	}

</style>