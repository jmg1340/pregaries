<template>
  <div class="q-pa-md">

    <q-card class="q-pa-md">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input filled v-model="nom" label="El teu nom *" lazy-rules
          :rules="[ val => val && val.length > 0 || 'Per favor, escriu el teu nom']" />
        
        <q-input filled v-model="email" label="El teu email *"  lazy-rules
          :rules="[ 
          val => val && val.length > 0 || 'Per favor, escriu el teu email',
          val => (val.includes('@') && val.includes('.')) || 'Per favor, escriu un email valid'
          ]" />

        <q-input filled type="textarea" v-model="pregaria" label="Pregària *" lazy-rules :rules="[
          val => val && val.length >0  || 'Per favor, escriu la pregaria que vulguis enviar'
        ]" />


        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </q-card>
    

  </div>
</template>



<script setup>
  import { useQuasar } from 'quasar'
  import { ref } from 'vue'

  const $q = useQuasar()

  const nom = ref(null)
  const pregaria = ref(null)
  const email = ref(null)
 
  const onSubmit = () => {
    // if (accept.value !== true) {
    //   $q.notify({
    //     color: 'red-5',
    //     textColor: 'white',
    //     icon: 'warning',
    //     message: 'You need to accept the license and terms first'
    //   })
    // }
    // else {
    //   $q.notify({
    //     color: 'green-4',
    //     textColor: 'white',
    //     icon: 'cloud_done',
    //     message: 'Submitted'
    //   })
    // }
  }

  const onReset = () => {
    nom.value = null
    pregaria.value = null
    email.value = null
  }
    


</script>