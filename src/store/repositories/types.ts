import { Repository } from '../../dto/RepositoryDTO';

export enum RepositoriesTypes {
  SEARCH_SUCESS = '@repo/SEARCH_SUCCESS',
  SEARCH_ERROR = '@repo/SEARCH_ERROR',
  SEARCH = '@repo/SEARCH_REPO',
}

export type RepositoriesState = {
  data: Repository[];
  load: boolean;
  error: boolean;
};

export type StateProps = {
  repositories: RepositoriesState;
};
