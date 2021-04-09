<template>
  <div>
    <div class="arrow_slide">
      <q-btn
        :label="$t('contact_line')"
        color="primary"
        no-caps
        square
        style="padding-left: 3vw; padding-right: 3vw"
        class="btn"
        @click="show = !show"
      />
    </div>
    <q-dialog v-model="show">
      <q-card class="q-card">
   
        <q-card-section class="form_container">
          <q-card-section class="card">
            <div class="fond text-h6">
              <span class="call">{{ $t("contact") }}</span>
            </div>
            <q-btn
              v-close-popup
              align="right"
              padding="none"
              color="white"
              flat
              icon="close"
            />
          </q-card-section>
          <q-card-section class="text-white" style="opacity: 0.8">
            {{ $t("form.send") }}
           
          </q-card-section>
          <q-card-section  class="text-white " style="opacity: 0.8;">
            Всего обращений: {{20+getcount.all_connection}} Рассмотрено обращений: {{20+getcount.check_connection}}
          </q-card-section>
          <q-card-section class="q-pt-none">
            <q-form class="form">
              <div class="wrap">
                <div class="column">
                  <span class="text-white" style="opacity: 0.8"
                    ><b>{{ $t("form.surname") }} *</b></span
                  >

                  <q-input
                    class="input"
                    filled
                    v-model="surname"
                    dark
                    lazy-rules
                    :placeholder="$t('form.surnamePlaceholder')"
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Пожалуйста, введите вашу Фамилию',
                    ]"
                    style="width: 100%"
                  />
                </div>
                <div class="column">
                  <span class="text-white" style="opacity: 0.8">
                    <b>{{ $t("form.name") }} *</b>
                  </span>

                  <q-input
                    class="input"
                    dark
                    filled
                    v-model="name"
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Пожалуйста, введите ваше Имя',
                    ]"
                    :placeholder="$t('form.namePlaceholder')"
                    style="width: 100%; opacity: 0.8"
                  />
                </div>
              </div>
              <div class="wrap">
                <div class="column">
                  <span class="text-white" style="opacity: 0.8"
                    ><b>{{ $t("form.patronymic") }}</b></span
                  >

                  <q-input
                    class="input"
                    filled
                    v-model="middle_name"
                    dark
                    :placeholder="$t('form.patrinymicPlaceholder')"
                    style="width: 100%; opacity: 0.8"
                  />
                </div>
                <div class="column">
                  <span class="text-white" style="opacity: 0.8">
                    <b>{{ $t("form.phone") }} *</b></span
                  >
                  <q-input
                    class="input"
                    type="number"
                    filled
                    v-model="phone"
                    :placeholder="$t('form.phonePlaceholder')"
                    style="width: 100%; opacity: 0.8"
                    dark
                  />
                </div>
              </div>
              <div class="wrap">
                <div class="column">
                  <span class="text-white" style="opacity: 0.8"
                    ><b>{{ $t("form.organisation") }} </b></span
                  >

                  <q-input
                    class="input"
                    filled
                    v-model="organisation"
                    dark
                    :placeholder="$t('form.organisationPlaceholder')"
                    style="width: 100%; opacity: 0.8"
                  />
                </div>
                <div class="column">
                  <span class="text-white" style="opacity: 0.8">
                    <b>Email * </b>
                  </span>
                  <q-input
                    class="input"
                    dark
                    lazy-rules
                    :rules="[
                      (val) =>
                        (val && val.length > 0) ||
                        'Пожалуйста, введите вашу почту',
                    ]"
                    filled
                    v-model="email"
                    type="email"
                    :placeholder="$t('form.emailPlaceholder')"
                    style="width: 100%; opacity: 0.8"
                  />
                </div>
              </div>
              <div class="wrap_comment">
                <div class="column">
                  <span class="text-white" style="opacity: 0.8">
                    <b>{{ $t("form.comment") }} </b>
                  </span>
                  <q-input
                    v-if="$q.platform.is.desktop"
                    dark
                    style="width: 100%; margin-top: 2%"
                    v-model="text"
                    filled
                    :placeholder="$t('form.commentPlaceholder')"
                    type="textarea"
                  />
                  <q-input
                    v-if="$q.platform.is.mobile"
                    dark
                    style="width: 100%; margin-top: 2%"
                    v-model="text"
                    filled
                    placeholder="Введите комментарий"
                  />
                </div>
                <div class="column" style="justify-content: flex-end">
                  <span
                    style="opacity: 0.8; color: white; font-size: 0.8vw"
                    class="information"
                    v-html="$t('form.description')"
                  >
                  </span>
                </div>
              </div>
            </q-form>
            <q-card-actions align="left" class="text-white">
              <q-btn
                :label="$t('form.sendMessage')"
                rounded
                type="submit"
                no-caps
                color="primary"
                @click="onSubmit"
                class="submit"
              />
            </q-card-actions>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
props:['getcount'],
  data() {
    return {
      show: false,
      name: null,
      phone: null,
      text: null,
      middle_name: null,
      organisation: null,
      leftDrawerOpen: false,
      info: null,
      surname: null,
      email: null,
    };
  },
  methods: {
    onReset() {
      this.name = null;
      this.middle_name = null;
      this.organisation = null;
      this.phone = null;
      this.surname = null;
      this.email = null;
      this.text = null;
    },
    onSubmit() {
      if (
        this.name != null &&
        this.name != "" &&
        this.email != null &&
        this.email != "" &&
        this.phone != null &&
        this.phone != ""
      ) {
        let data2 = {
          name: this.name,
          surname: this.surname,
          middle_name: this.middle_name,
          email: this.email,
          organisation: this.organisation,
          phone: this.phone,
          text: this.text,
        };
        let data = JSON.stringify(data2);
        this.$q.notify({
          color: "green",
          textColor: "white",
          icon: "done",
          message:
            "Спасибо за обращение! C вами свяжутся в ближайшее время, ожидайте",
        });
        fetch("https://backendinvest.admlr.lipetsk.ru/", {
          method: "POST",
          body: data,
          headers: { "content-type": "application/json" },
        }).then(function (response) {
          return response.json();
        });
        this.show = false;
        this.onReset();
      } else {
        this.$q.notify({
          color: "red",
          textColor: "white",
          icon: "warning",
          message: "Пожалуйста, заполните обязательные поля корректно!",
        });
      }
    },
    OpenPDF() {
      window.open("data:application/pdf;base64, " + base64EncodedPDF);
    },
  },



};
</script>
<style scoped>
@media screen and (min-width: 280px) {
  /* мобильная верстка */
  .arrow_slide {
    /* position: absolute; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0 !important;
    top: 0;
    width: 100% !important;

    /* margin-top: 83vh; */
  }
  .btn {
    width: 100%;
  }
  .wrap {
    flex-direction: column !important;
  }
  .column {
    width: 100% !important;
  }
  .q-card {
    width: 100% !important;
  }
  .form_container {
    padding: 0 !important;
  }
  .wrap_comment {
    flex-direction: column !important;
  }
  .information {
    font-size: 2.5vw !important;
  }
  .submit {
    width: 100% !important;
  }
  .fond {
    font-size: 5vw !important;
  }
}
.submit {
  width: 20%;
  margin-top: 3%;
}
@media screen and (min-width: 768px) {
  /* планшетная верстка */
  .fixed {
    display: none !important;
  }
  .column {
    width: 48% !important;
  }
  .wrap {
    flex-direction: row !important;
  }
  .fond {
    font-size: 2vw !important;
  }
  .btn {
    width: auto;
  }
  .information {
    font-size: 1vw !important;
  }
  .wrap_comment {
    flex-direction: row !important;
  }
}
.call {
  border-bottom: 2px solid white;
  padding-bottom: 0.2%;
}
@media (min-width: 768px) and (max-width: 1024px) {
  .q-card {
    height: auto !important;
    width: 100% !important;
  }
  .submit {
    margin: 2% auto;
    width: 20% !important;
  }
}
@media screen and (min-width: 1025px) {
  .btn {
    padding-top: 0.5vh;
    padding-bottom: 0.5vh;
    width: auto;
  }
  .information {
    font-size: 0.7vw !important;
  }
  .q-card {
    justify-content: space-around;
    width: 55% !important;
    height: auto !important;
  }
  .submit {
    margin: 2% auto;
    width: 20% !important;
  }
}

.q-card {
  width: 55%;
  max-width: 100vw;
  height: 83vh;
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 50%;
  background: rgba(0, 0, 0, 0.9);
}
.card {
  display: flex;
  width: 100%;

  justify-content: space-between;
}
.comment {
  color: white;
  align-self: flex-start;
  width: 48%;
  font-size: 0.7vw;
}

.wrap {
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
}
.wrap_comment {
  display: flex;
  flex-direction: row;

  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-between;
}
.column {
  width: 48%;
}
.fixed {
  right: 0;
  border: none;
  height: 6vh;
  width: 14vw;
  border-radius: 150px;
  margin-right: 6%;
  font-size: 0.8vw;
  color: white;
  background: #2cccd8;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 5%;
  cursor: pointer;
  z-index: 10;
}
.fond {
  padding-top: 1.5%;
  margin: 0;
  color: white;

  font-size: 2.3vw;
}
.absolute:hover {
  /* background: rgba(255, 255, 255, 0.3); */
}
.img {
  width: 1.2vw;
  margin-right: 0.5vw;
}
.img img {
  width: 100%;
}
.form_inside {
  margin-top: 5%;
  height: 60%;
  display: flex;
  flex-direction: column;
}

.border_bottom {
  margin-right: 150%;
  width: 50%;
}
.inside {
  display: flex;
}
.left-top {
  padding-top: 3%;
  margin: 0;
  color: white;
  font-size: 2.3vw;
}

.flex {
  align-items: center;
  justify-content: space-between;
}
.input {
  margin-top: 3%;
  opacity: 0.8;
  width: 47%;
}
.input_right {
  margin-top: 3%;
  margin-left: 10%;
  opacity: 0.8;
  width: 47%;
}
.wrapp {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.form_container {
  height: 90%;
  width: 97%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.one {
  margin-bottom: 10%;
}
.fixed-center {
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 50%;
  background: rgba(0, 0, 0, 0.9);
}
* {
  font-family: "Montserrat";
}

.form_button {
  position: absolute;
  top: 0;
  right: 2%;
  justify-content: flex-end;
  align-items: flex-end;
}
.arrow_slide {
  display: flex;
  align-items: flex-start;
  font-size: 0.8vw;
  justify-content: flex-start;
}
</style>