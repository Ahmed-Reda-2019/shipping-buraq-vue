<template>
  <div>

    <apexchart :options="options" :series="series" type="pie" width="380"></apexchart>
  </div>
</template>

<script>
import MixedWidget2 from "@/components/widgets/mixed/Widget2.vue";
import MixedWidget7 from "@/components/widgets/mixed/Widget7.vue";

import {defineComponent} from "vue";

export default defineComponent({
  name: "pieChart",
  props: ['data', 'lableKey', 'seriesKey'],
  components: {
    // MixedWidget7
  },
  data() {
    return {
      series: [],
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    }
  },
  created() {
    this.prepare();
  },
  methods: {
    prepare() {
      var series = [];
      var labels = [];
      this.data.forEach((value, index) => {

        if (value[this.lableKey] && value[this.lableKey].name)
          labels.push(value[this.lableKey].name)
        if (value[this.seriesKey])
          series.push(value[this.seriesKey])
      });
      this.series = series;
      this.options = {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: labels,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      };
      //   this.series = series;
    },
  },
  computed: {
    // series(){
    //   return this.series;
    // }
  }
})
</script>
