import { defineStore } from "pinia";

export const useAppStore = defineStore("AppStore", {
  state: () => ({
    tipusPregaria: null,
    bToolBar: false,
    tamanyFont: 17,
    arrFavorits: [],
    pregariaActiva: null,
    arrExamen: [],
    mostrarIconaFavorits: true,
    mostrarBotoTornar: false
  }),
  getters: {
    getClauInFavorits: (state) =>
      state.arrFavorits.includes(state.pregariaActiva),
  },
  actions: {
    /**
     * Posar la barra d'eines (component tamanyLletra.vue) visible o no.
     *
     * @param {boolean} sino
     */
    setToolBar(sino) {
      this.bToolBar = sino;
    },
    setMostrarIconaFavorits ( sino ) {
      this.mostrarIconaFavorits = sino
    },
    setMostrarBotoTornar ( sino ) {
      this.mostrarBotoTornar = sino
    },


    /**
     * Augmenta el tamany de la lletra de les pregàries
     */
    increment() {
      if (this.tamanyFont < 50) this.tamanyFont++;
    },

    /**
     * Disminueix el tamany de la lletra de les pregàries.
     */
    decrement() {
      if (this.tamanyFont > 12) this.tamanyFont--;
    },

    /**
     * Estableix el tamany de la lletra de les pregàries.
     * Utilitzat per recuperar aquesta dada de localStorage
     *
     * @param {number} valor
     */
    setTamanyFont(valor) {
      this.tamanyFont = valor;
    },

		/**
		 * Estableix la clau de la oració activa per a que despres pugui ser afegida o treta
		 * del array de favorits si es clica la icona del cor
		 * @param {string} clau
		 */
    setPregariaActiva(clau) {
      this.pregariaActiva = clau;
    },

		/**
		 * Recupera la calu de la oració activa en el moment d'afegir o treure una oració
		 * al array de Favorits
		 * @returns
		 */
    getPregariaActiva() {
      return this.pregariaActiva;
    },

    /**
     * Afegeix la clau de la oració al array de oracions favorites
     *
     * @param {string} clau
     */
    afegirFavorit(clau) {
      this.arrFavorits.push(clau);
    },

    /**
     * Treu una clau d'una oració que esta al array de oracions favorites
     *
     * @param {string} clau
     */
    treureFavorit(clau) {
      this.arrFavorits.splice(this.arrFavorits.indexOf(clau), 1);
    },

    /**
     * Recupera l'array de favorits del store per emmagatzemar-lo al LocalStorage
     *
     * @returns
     */
    getFavorits() {
      return this.arrFavorits;
    },

    /**
     * Guarda el array de favorits al localStorage
     *
     * @param {string} arr
     */
    setFavorits(strArr) {
      if (strArr !== null || strArr !== undefined) {
        this.arrFavorits = JSON.parse(strArr);
      }
    },


    /**
     * Recupera l'array de favorits del store per emmagatzemar-lo al LocalStorage
     *
     * @returns
     */
    getArrExamen() {
      return this.arrExamen;
    },

    /**
     * Guarda el array de Examen al localStorage
     *
     * @param {string} arr
     */
    setArrExamen(strArr) {
      if (strArr !== null || strArr !== undefined) {
        this.arrExamen = JSON.parse(strArr);
      }
    },
  },
});
