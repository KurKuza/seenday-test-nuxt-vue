export const useDeleteConfirm = defineStore("deleteConfirm", () => {
  const isDelete = ref(false);

  const deleteConfirm = () => {
    isDelete.value = !isDelete.value;
  };

  return { isDelete, deleteConfirm };
});
