<template>
  <div class="q-mt-md">
    
    <div class="q-my-md text-h6 text-center">LLETANIES</div>


      <q-card class="tipusLletraTextOracio">
        <q-card-section
					v-for="(arrObjs, clave) in objRosari.lletanies"
          :key="clave"
				>

            <div 
							v-for="(obj, index) in arrObjs" :key="clave + index"
							class="row justify-center q-my-sm"
						>
              <div class="col-6 col-md-3 text-negative">
                {{ obj.text1 }}
              </div>
              <div class="col-6 col-md-3 text-grey">
                {{ obj.text2 }}
              </div>
							
            </div>
            <!-- <q-separator /> -->
          
					
        </q-card-section>
      </q-card>


  </div>
</template>


<style scoped>
.borde {
  border: 1px solid red;
}
</style>

<script setup>
import objRosari from "../../dades/rosari.json";
</script>
