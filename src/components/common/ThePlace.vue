<template>
  <div style="height: 100%; width: 100%; ">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
      style="height: 100%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <l-marker :icon="icon" :lat-lng="withTooltip">
        <l-tooltip :options="{ interactive: true }">
          <div>А place where you are always welcome</div>
        </l-tooltip>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng, icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LTooltip } from "vue2-leaflet";
export default {
  name: "ThePlace",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data() {
    return {
      zoom: 17,
      center: latLng(49.0668, 33.4137337),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      icon: icon({
        iconUrl: require("./img/cafe.svg"),
        iconSize: [40, 45],
        iconAnchor: [16, 37]
      }),
      withTooltip: latLng(49.066653, 33.413647),
      currentZoom: 11.5,
      currentCenter: latLng(49.066693, 33.413737),
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },

  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }
  }
};
</script>
<style lang="scss"></style>
