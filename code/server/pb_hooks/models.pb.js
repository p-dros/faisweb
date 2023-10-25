/// <reference path="../pb_data/types.d.ts" />

onModelBeforeCreate((e) => {
  e.model.set('role', 'student');
}, 'users');
