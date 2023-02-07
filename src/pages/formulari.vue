<template>
  <div class="q-pa-md">

    <q-card class="q-mb-md">
      <q-card-section>
        Ajuda'ns a ampliar el repertori de pregàries. També pots fer-nos arribar algun suggeriment sobre l'aplicació.
        <div class="text-center">MOLTES GRÀCIES.</div>
      </q-card-section>
    </q-card>


    <q-card class="q-pa-md">
      <q-form ref="myForm" @submit.prevent.stop="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="nom" label="El teu nom *" lazy-rules
          :rules="[ val => val && val.length > 0 || 'Per favor, escriu el teu nom']" />

        <q-input filled v-model="email" label="El teu email *"  lazy-rules
          :rules="[
          val => val && val.length > 0 || 'Per favor, escriu el teu email',
          val => (val.includes('@') && val.includes('.')) || 'Per favor, escriu un email valid'
          ]" />

        <q-input filled type="textarea" v-model="pregaria" label="Suggeriment / Pregària *" lazy-rules :rules="[
          val => val && val.length >0  || 'Per favor, escriu la pregaria que vulguis enviar'
        ]" />


        <div class="row justify-between">
          <q-btn class="col-auto" icon="send" label="Enviar" noCaps type="submit" color="brown-10" />
          <q-btn class="col-auto q-ml-sm" flat label="Reset" noCaps type="reset" color="brown-10" />
        </div>
      </q-form>
    </q-card>


  </div>
</template>



<script setup>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'
  // import vue from 'vue'
  import axios from 'axios'
  // import VueAxios from 'vue-axios'

  // Vue.use(VueAxios, axios)

  // console.log("Vue", vue)


  const $q = useQuasar()


  const myForm = ref(null)
  const nom = ref(null)
  const pregaria = ref(null)
  const email = ref(null)

  const onSubmit = async () => {

    const request = new Request('https://pregaries.bonanova.cat/enviarPregaries.php',
    {
      method: 'POST',
      // mode: 'no-cors',
      // credentials: 'same-origin',
      // headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        nom: nom.value,
        email: email.value,
        pregaria: pregaria.value
      })
    });

    fetch(request)
    .then((response) => response.text())
    .then(data => {
      console.log("log DATA:", data)

      myForm.value.reset()

      $q.notify({
        color: 'green-6',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Suggeriment / pregària ENVIADA'
      })

    })
    .catch(error => {
      console.error(error)
      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: "Hi ha hagut algun problema i no s'ha pogut enviar. \n"  + error.message
      })

    });





/*
    try {
    let data = new FormData();
      data.append('nom', nom.value);
      data.append('email', email.value);
      data.append('pregaria', pregaria.value);

    const resultat = await axios.post('https://pregaries.bonanova.cat/enviarPregaries.php',
      data,
      {
        headers: {
          "Content-Type": "application/json",
        }
      }
    );

    console.log("resultat", resultat)



      // const rawResponse = await fetch('https://pregaries.bonanova.cat/enviarPregaries.php', {
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     nom: nom.value,
      //     email: email.value,
      //     pregaria: pregaria.value
      //    })
      // });

      // const content = await rawResponse.json();
      // console.log("content", content);

      myForm.value.reset()

      $q.notify({
        color: 'green-6',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Suggeriment / pregària enviada'
      })


    } catch (error) {
      console.log("error:", error);
      $q.notify({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: 'No hi ha comunicació amb el servidor.\n\n' + error.message
      })

    }

 */
  }

  const onReset = () => {
    nom.value = null
    pregaria.value = null
    email.value = null
  }





</script>
