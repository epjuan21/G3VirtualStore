<template>
  <div class="container-fluid">
    <div class="row justify-content-md-center mb-5">
      <div class="col-md-auto col-xl-3">
        <h1 class="text-center">Registrar Usuario</h1>

        <form @submit.prevent="register">
          <div class="col mb-3">
            <label for="inputUser" class="form-label">Usuario</label>
            <input
              type="text"
              class="form-control"
              id="inputUser"
              v-model="formData.username"
              :class="{ error: formError.username }"
            />
          </div>
          <div class="col mb-3">
            <label for="inputEmail" class="form-label">Correo</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              v-model="formData.email"
              :class="{ error: formError.email }"
            />
          </div>
          <div class="col mb-3">
            <label for="inputPassword" class="form-label">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="inputPassword"
              v-model="formData.password"
              :class="{ error: formError.password }"
            />
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit" :disabled="loading">
              <span
                v-bind:class="loading ? 'spinner-border spinner-border-sm' : ''"
                role="status"
                aria-hidden="true"
              ></span>
              {{ loading ? 'Procesando...' : 'Crear Usuario' }}
            </button>
            <router-link class="btn btn-link" to="/login"
              >Iniciar Sesión</router-link
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
import { registerApi } from '../api/user';
import { getTokenApi } from '../api/token';
export default {
  name: 'Register',

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
      username: yup.string().required(true),
      email: yup
        .string()
        .email(true)
        .required(true),
      password: yup.string().required(true),
    });

    const register = async () => {
      formError.value = {};
      loading.value = true;

      try {
        await schemaForm.validate(formData.value, { abortEarly: false });

        try {
          const response = await registerApi(formData.value);
          router.push('/login');
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }
      loading.value = false;
    };
    return {
      formData,
      formError,
      register,
      loading,
    };
  },
};
</script>
