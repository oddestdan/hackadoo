export const progressActionTypes = {
  SAVE_PROGRESS: 'SAVE_PROGRESS',
};

export const saveProgress = (progress) => ({
  type: progressActionTypes.SAVE_PROGRESS,
  payload: { progress },
});
