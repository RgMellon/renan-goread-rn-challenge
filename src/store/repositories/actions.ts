import { RepositoriesTypes } from './types';
import { Repository } from '../../dto/RepositoryDTO';

export const searchSuccess = (data: Repository[]) => {
  return {
    type: RepositoriesTypes.SEARCH_SUCESS,
    payload: { data },
  };
};

export const searchError = () => {
  return {
    type: RepositoriesTypes.SEARCH_ERROR,
  };
};

export const searchRepository = (searchTerm: string) => {
  return {
    type: RepositoriesTypes.SEARCH,
    payload: { searchTerm },
  };
};
