import { defineStore } from 'pinia';

export const useAppStore = defineStore('AppStore', {
  state: () => ({
    tamanyFont: 15,
		arrFavorits: [],
		pregariaActiva: null,
  }),
  getters: {
    doubleCount: (state) => state.tamanyFont * 2,

		getClauInFavorits: ( state ) => state.arrFavorits.includes( state.pregariaActiva )
		
  },
  actions: {
    increment() {
      if (this.tamanyFont < 50) this.tamanyFont++;
    },
    decrement() {
      if (this.tamanyFont > 12) this.tamanyFont--;
    },



		setPregariaActiva ( clau ) {
			this.pregariaActiva = clau
		},
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
