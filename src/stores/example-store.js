import { defineStore } from 'pinia';

export const useAppStore = defineStore('AppStore', {
  state: () => ({
		tipusPregaria: null,
		bToolBar: false,
    tamanyFont: 17,
		arrFavorits: [],
		pregariaActiva: null,
  }),
  getters: {
		getClauInFavorits: ( state ) => state.arrFavorits.includes( state.pregariaActiva ),
  },
  actions: {
		setToolBar (sino) { this.bToolBar = sino },
		
		setTipusPregaria ( tipus ) { this.tipusPregaria = tipus },

    increment() {
      if (this.tamanyFont < 50) this.tamanyFont++;
    },
    decrement() {
      if (this.tamanyFont > 12) this.tamanyFont--;
    },
		setTamanyFont ( valor ) { this.tamanyFont = valor },



		setPregariaActiva ( clau ) { this.pregariaActiva = clau },
		getPregariaActiva() { return this.pregariaActiva },




		afegirFavorit (clau) {
			this.arrFavorits.push(clau)
		},
		treureFavorit (clau) {
			this.arrFavorits.splice(this.arrFavorits.indexOf(clau), 1)
		},
		getFavorits() { return this.arrFavorits },
		setFavorits( arr ) { 
			if ( !arr === null || !arr=== undefined ) {
				this.arrFavorits = JSON.parse(arr) 
			}
		}
  },
});
