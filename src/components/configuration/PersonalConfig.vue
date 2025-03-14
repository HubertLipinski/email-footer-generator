<script setup lang="ts">
import { useConfiguratorStore } from '@/stores/configurator.ts'
import { storeToRefs } from 'pinia'
import { useTranslation } from '@/composables/useTranslation.ts'

const store = useConfiguratorStore()
const { personal } = storeToRefs(store)

const { t, selected, zodI18nErrorMap } = useTranslation()

import { ErrorMessage, Field, Form } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

z.setErrorMap(zodI18nErrorMap())

const schema = toTypedSchema(
  z
    .object({
      name: z.string().nonempty(),
      position: z.string().nullable(),
      email: z.string().nonempty().email(),
      phone: z
        .string()
        .nonempty()
        .regex(/^(?:\+?[0-9]{1,3}[\s-]?)?(?:\(?\d{2,4}\)?[\s-]?)?\d{3}[\s-]?\d{3}[\s-]?\d{3}$/),
      company: z.string().nullable(),
      website: z.string().url().nullable(),
      includeImage: z.boolean(),
      imageUrl: z.string().url().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.includeImage && data.imageUrl?.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.invalid_string,
          validation: 'url',
          path: ['imageUrl'],
        })
      }
      return true
    }),
)
</script>

<template>
  <div class="flex flex-col tab-content" :key="`lang-${selected}`">
    <Form
      ref="form"
      validate-on-mount
      :validation-schema="schema"
      @submit.prevent="() => {}"
      class="flex flex-col gap-2"
    >
      <div class="sm:join gap-4">
        <fieldset class="fieldset join-item sm:w-1/2">
          <legend class="fieldset-legend">{{ t('editor.form.name') }}</legend>
          <Field
            type="text"
            name="name"
            class="input w-full"
            placeholder="John Doe"
            v-model.trim="personal.name"
            required
            autocomplete="on"
          />
          <ErrorMessage name="name" class="text-error" />
        </fieldset>
        <fieldset class="fieldset join-item sm:w-1/2">
          <legend class="fieldset-legend">{{ t('editor.form.position') }}</legend>
          <Field
            type="text"
            name="position"
            class="input w-full"
            placeholder="Software Developer"
            v-model.trim="personal.position"
          />
          <ErrorMessage name="position" class="text-error" />
        </fieldset>
      </div>

      <div class="sm:join gap-4">
        <fieldset class="fieldset join-item sm:w-1/2">
          <legend class="fieldset-legend">{{ t('editor.form.email') }}</legend>
          <Field
            type="email"
            name="email"
            class="input w-full"
            placeholder="johndoe@example.com"
            v-model.trim="personal.email"
            autocomplete="on"
          />
          <ErrorMessage name="email" class="text-error" />
        </fieldset>
        <fieldset class="fieldset join-item sm:w-1/2">
          <legend class="fieldset-legend">{{ t('editor.form.phone') }}</legend>
          <Field
            type="tel"
            name="phone"
            class="input w-full"
            placeholder="123456789"
            v-model.trim="personal.phone"
            autocomplete="on"
          />
          <ErrorMessage name="phone" class="text-error" />
        </fieldset>
      </div>

      <fieldset class="fieldset">
        <legend class="fieldset-legend">{{ t('editor.form.company') }}</legend>
        <Field
          type="text"
          name="company"
          class="input w-full"
          placeholder="Company"
          v-model.trim="personal.company"
          autocomplete="on"
        />
        <ErrorMessage name="company" class="text-error" />
      </fieldset>

      <fieldset class="fieldset">
        <legend class="fieldset-legend">{{ t('editor.form.website') }}</legend>
        <Field
          type="url"
          name="website"
          class="input w-full"
          placeholder="https://example.com"
          v-model.trim="personal.website"
        />
        <ErrorMessage name="website" class="text-error" />
      </fieldset>

      <div class="inline-flex flex-col gap-1">
        <label class="fieldset-label max-w-64 pt-2">
          <Field
            type="checkbox"
            name="includeImage"
            :unchecked-value="false"
            :value="true"
            class="toggle toggle-sm"
            v-model="personal.image.enabled"
          />
          <span class="pl-2 d-block text-base-content text-sm">{{ t('editor.form.includeImage') }}</span>
        </label>
        <ErrorMessage name="includeImage" class="text-error text-xs" />
      </div>

      <fieldset class="fieldset" v-if="personal.image.enabled">
        <legend class="fieldset-legend">{{ t('editor.form.imageUrl') }}</legend>
        <Field
          type="url"
          name="imageUrl"
          class="input w-full"
          placeholder="https://example.com"
          v-model.trim="personal.image.url"
        />
        <ErrorMessage name="imageUrl" class="text-error" />
      </fieldset>
    </Form>
  </div>
</template>

<style scoped></style>
