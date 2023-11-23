<script lang="ts">
import {defineComponent} from 'vue'
import Icon from "./icons/icon.vue";

export default defineComponent({
  name: "Card",
  components: {Icon},
  props: {
    dataPizza: {
      type: Array,
      required: true,
      default: () => []
    },
    loading: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  data() {
    return {
      selectSize: '',
      selectType: ''
    }
  },
  computed: {
    btnGroupInfo() {
      return ['тонкое', 'традиционное', '26 см.', '30 см.', '40 см.']
    },

  },
  methods: {
    selectedType(value:string) {
      value.includes('см') ? this.selectSize = value : this.selectType = value
    },
    disabledBtn(exIndex: number, index: number) {
      if (this.dataPizza?.length > 0) {
        if (exIndex === 0) {
          return this.dataPizza[index].types[0] !== 0
        }
        if (exIndex === 1) {
          return this.dataPizza[index].types[1] !== 1
        }
        if (exIndex === 2) {
          return this.dataPizza[index].sizes[0] !== 26
        }
        if (exIndex === 3) {
          return this.dataPizza[index].sizes[1] !== 30
        }
        if (exIndex === 4) {
          return this.dataPizza[index].sizes[2] !== 40
        }
      }

    }
  },

})
</script>

<template>
  <div v-if="!loading" class="card-container">
    <div v-for="(pizza, index) in dataPizza" :key="index">
      <div class="card-wrapper d-flex flex-column justify-space-between">
        <img height="260" width="260" :src="pizza!.imageUrl" alt="pizza" class="ml-3">
        <div class="pizza-name text-center">{{pizza!.title}}</div>
        <section class="btn-group text-center">
          <v-btn
              v-for="(btn, exIndex) of btnGroupInfo"
              :disabled="disabledBtn(exIndex, index)"
              :class="[`block${exIndex + 1}`, 'uppercase-disabled']"
              :text="btn"
              :key="`key-btn${btn}`"
              variant="flat"
              class="btn-type"
              @click="selectedType(btn)"
          />
        </section>
        <section class="btn-action mt-4 d-flex justify-space-between align-center">
          <span class="price">от {{ pizza!.price}}₽</span>
          <v-btn
              variant="outlined"
              color="#EB5A1E"
              rounded="xl"
              class="uppercase-disabled btn-plus"
          >
            <template #prepend>
              <Icon :type-icon="'plus'" />
            </template>
            <span>Добавить</span>
          </v-btn>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
  .pizza-name {
    font-size: 20px;
    font-weight: 800;
    font-family: 'Montserrat', sans-serif;
  }
  .card-wrapper {
    height: 480px;
    width: 280px;
    margin-bottom: 20px;
  }
  .pizza-name {
    margin: 5px 0 15px;
  }
  .btn-group {
    width: inherit;
    background-color: #F3F3F3;
    padding: 6px;
    border-radius: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5px 5px;
    grid-template-areas:
    "block1 block1 block1 block2 block2 block2"
    "block3 block3 block4 block4 block5 block5";
  }
  .block1 { grid-area: block1; }
  .block2 { grid-area: block2; }
  .block3 { grid-area: block3; }
  .block4 { grid-area: block4; }
  .block5 { grid-area: block5; }
  .btn-type {
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 17px;
    text-transform: lowercase !important;
    font-stretch: 50% !important;
  }
  .btn-plus {
    font-size: 14px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }
  .price {
    font-size: 22px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
  }
</style>