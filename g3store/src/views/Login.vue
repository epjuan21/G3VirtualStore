<template>
  <div class="container-fluid">
    <div class="row justify-content-md-center mb-5">
      <div class="col-md-auto col-lg-3">
        <h1 class="text-center">Iniciar Sesión</h1>

        <form @submit.prevent="login">
          <div class="col mb-3 ">
            <label for="inputUser" class="form-label">Usuario</label>
            <input
              type="text"
              class="form-control"
              v-model="formData.identifier"
              :class="{ error: formError.identifier }"
              id="inputUser"
            />
          </div>
          <div class="col mb-3">
            <label for="inputPassword" class="form-label">Contraseña</label>
            <input
              type="password"
              class="form-control"
              v-model="formData.password"
              :class="{ error: formError.password }"
              id="inputPassword"
            />
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit" :disabled="loading">
              <span
                v-bind:class="loading ? 'spinner-border spinner-border-sm' : ''"
                role="status"
                aria-hidden="true"
              ></span>
              {{ loading ? 'Iniciando...' : 'Iniciar' }}
            </button>
            <router-link class="btn btn-link" to="/register"
              >Registrarse</router-link
            >
          </div>
        </form>
      </div>
    </div>

    <hr />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import * as yup from 'yup';
import { loginApi } from '../api/user';
import { setTokenApi, getTokenApi } from '../api/token';

export default {
  name: 'Login',

  setup() {
    let formData = ref({});
    let formError = ref({});
    let loading = ref(false);
    const router = useRouter();
    const token = getTokenApi();

    onMounted(() => {
      if (token) router.push('/');
    });

    const schemaForm = yup.object().shape({
      identifier: yup.string().required(true),
      password: yup.string().required(true),
    });

    const login = async () => {
      formError.value = {};

      try {
        await schemaForm.validate(formData.value, { abortEarly: false });

        try {
          const response = await loginApi(formData.value);
          if (!response?.jwt) throw 'El usuario y contraseña no son validos';
          setTokenApi(response.jwt);
          location.replace('/');
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }
    };

    return {
      formData,
      formError,
      login,
      loading,
    };
  },
};
</script>