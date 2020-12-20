<template>
  <FormulateForm
    v-model="values"
    :keep-model-data="true"
    @submit="submitHandler"
  >
    <div id="App">

      <img alt="Dude logo" src="./assets/dude2go_logo_white.png">
      <div class="Form">
      <div class="col">
        <FormulateInput class="Input"
          type="text"
          name="clientname"
          label="Client Name"
          validation="required"
        />

        <FormulateInput class="Input"
          type="text"
          name="compyname"
          label="Company Name"
          validation="required"

        />
      </div>
      <div class="col">
        <FormulateInput class="Input"
          type="email"
          name="email"
          label="Email"
          validation="required|email"
        />
        <FormulateInput class="Input"
        type="tel"
        name="phone"
        label="Phone Number"
        validation="required|number"
        min="0"
        max="100"
/>
</div>
  <div class="col">
<FormulateInput class="Input"
  type="text"
  name="project"
  label="Project Name"
  validation="required"
/>
<FormulateInput
  type="date" class="Input"
  name="date"
  label="Desired Completion Date"
  validation="required"
/>
</div>
<div class="col">
<FormulateInput
    type="select"
    name="quote"
    label="Type"
    :options="[
    { value: 'Landing PageFunnel Buildout', label: 'Landing PageFunnel Buildout' },
    { value: 'Website Buildout', label: 'Website Buildout' },
    { value: 'WordPres Updates and Changes', label: 'WordPres Updates and Changes' },
    { value: 'Website Mockups', label: 'Website Mockups' },
    { value: 'Landing Page Funnel Mockups', label: 'Landing Page Funnel Mockups' },
    { value: 'Design Banners', label: 'Design Banners' }
  ]"
  />

  <FormulateInput
      v-if="values.quote === 'Website Buildout'"
      key="wb"
      class="Input"
      name="mockup"
      type="select"
      label="Mockup Format"
      :options="[
      { value: 'PSD', label: 'PSD' },
      { value: 'XD', label: 'XD' },
      { value: 'Figma', label: 'Figma' },
      { value: 'No mockups', label: 'No mockups (you must have design mock-ups to submit a request)' }
      ]"

    />
  </div>
  <div class="col">
      <FormulateInput
          v-if="values.quote === 'Website Buildout'"
          class="Input"
          name="wtheme"
          type="select"
          label="Theme Options"
          :options="[
          { value: 'Divi', label: 'Divi' },
          { value: 'Twenty Theme', label: 'Twenty Theme' },
          { value: 'Custom', label: 'Custom' },
          { value: 'Beaver Themes', label: 'Beaver Themes'},
          { value: 'Astra Theme', label: 'Astra Theme' }
          ]"
        />

        <FormulateInput
            v-if="values.quote === 'Website Buildout'"
            class="Input"
            name="builder"
            type="select"
            label="Builder"
            :options="[
            { value: 'Divi Builder', label: 'Divi Builder' },
            { value: 'Elementor Pro', label: 'Elementor Pro' },
            { value: 'Beaver Builder', label: 'Beaver Builder' },
            { value: 'WPBakery', label: 'WPBakery' }
            ]"
          />
</div>

<div class="col">
    <FormulateInput
        v-if="values.quote === 'Website Buildout'"
        class="Input"
        type="number"
        name="pages"
        label="Pages to be Developed"
        validation="required|number"
        help="Number of Pages"
        min="0"
        max="100"

/>

  <FormulateInput
      v-if="values.quote === 'Website Buildout'"
      class="Input"
      name="hosting"
      type="select"
      label="Hosting Provider"
      :options="[
      { value: 'WP Engine', label: 'WP Engine' },
      { value: 'Bluehost', label: 'Bluehost' },
      { value: 'Flywheel', label: 'Flywheel' },
      { value: 'SiteGround', label: 'SiteGround'},
      { value: 'Host Gator', label: 'Host Gator' },
      { value: 'DreamHost', label: 'DreamHost' },
      { value: 'ManageWP', label: 'ManageWP' }
      ]"
    />
</div>
<div class="col">

  <FormulateInput
      v-if="values.quote === 'Website Buildout'"
      class="Input"
      name="plugins"
      type="checkbox"
      label="Plugin Options"
      :options="[
      { value: 'Yoast', label: 'Yoast' },
      { value: 'All in One SEO', label: 'All in One SEO' },
      { value: 'Gravity Forms', label: 'Gravity Forms' },
      { value: 'Google Maps', label: 'Google Maps'},
      { value: 'Smart Slider', label: 'Smart Slider' }
      ]"
    />

<FormulateInput
    v-if="values.quote === 'Website Buildout'"
    class="Input"
    name="tools"
    type="checkbox"
    label="Other Tools"
    :options="[
    { value: 'Hotjar', label: 'Hotjar' },
    { value: 'Google Tag Manager', label: 'Google Tag Manager' },
    { value: 'Gravity Forms', label: 'Gravity Forms' }
    ]"
  />

</div>

<FormulateInput
v-if="values.quote === 'Website Buildout'"
    type="submit"
    name="Quote your project"
  />

</div>
</div>
</FormulateForm>
</template>

<script>
const axios2 = require('axios');
export default {
  data () {
    return {
      values: {
      }
    }
  },

  methods: {
    submitHandler (data) {
      alert(`Thank you, ${data}`);
      alert(JSON.stringify(data));
      alert(`Thank none`);
      axios2.post('http://68.183.138.116:30001/', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  }

}



</script>





<style>

#App {

  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  padding: 60px;
  background-color: #295eec;
  height: auto;
}


.Input {
  flex: 50%;
}

.col{
  display: flex;
  width: 500px;
  margin: 0 auto;
}

.Form
{
  padding-top: 50px;
}

body{
  margin: 0px!important;
}
</style>
