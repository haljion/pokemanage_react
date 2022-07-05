import { Suspense, useEffect, useState, VFC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Helmet } from 'react-helmet';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
// eslint-disable-next-line import/no-extraneous-dependencies
import Select from 'react-select';

import {
  InputLabel,
  Switch,
  RadioGroup,
  Radio,
  FormControlLabel,
  TextField,
  Button,
  Grid,
  Typography,
  ButtonGroup,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Alert,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import {
  SelectOption,
  UserPoke,
  UserPokeForm,
  Personality,
  Waza,
  Item,
} from '../../utils/types';

import { patchUserPoke } from '../../utils/callApiFunctions';
import {
  checkDuplicate,
  getRate,
  getStatusAS,
  getStatusH,
  kataToHira,
} from '../../utils/utilFunctions';
import { appConsts } from '../../utils/consts';

const UserPokeEdit: VFC<{
  userPoke: UserPoke;
  personalitys: Personality[];
  wazas: Waza[];
  items: Item[];
  abilitys: SelectOption[];
}> = ({ userPoke, personalitys, wazas, items, abilitys }) => {
  const {
    control,
    watch,
    handleSubmit,
    resetField,
    getValues,
    formState: { errors },
  } = useForm<UserPokeForm>({
    defaultValues: {
      id: userPoke.id,
      pokemon: userPoke.pokemon,
      nickname: userPoke.nickname,
      gender: String(userPoke.gender),
      ball: userPoke.ball,
      color: String(userPoke.color),
      ability: abilitys[Number(userPoke.ability) - 1],
      personality: userPoke.personality,
      individualValueH: userPoke.individualValueH,
      individualValueA: userPoke.individualValueA,
      individualValueB: userPoke.individualValueB,
      individualValueC: userPoke.individualValueC,
      individualValueD: userPoke.individualValueD,
      individualValueS: userPoke.individualValueS,
      effortValueH: userPoke.effortValueH,
      effortValueA: userPoke.effortValueA,
      effortValueB: userPoke.effortValueB,
      effortValueC: userPoke.effortValueC,
      effortValueD: userPoke.effortValueD,
      effortValueS: userPoke.effortValueS,
      waza1: userPoke.waza1,
      waza2: userPoke.waza2,
      waza3: userPoke.waza3,
      waza4: userPoke.waza4,
      item: userPoke.item,
      remarks: userPoke.remarks,
    },
  });

  const [effortValueH, setEffortValueH] = useState(userPoke.effortValueH);
  const [effortValueA, setEffortValueA] = useState(userPoke.effortValueA);
  const [effortValueB, setEffortValueB] = useState(userPoke.effortValueB);
  const [effortValueC, setEffortValueC] = useState(userPoke.effortValueC);
  const [effortValueD, setEffortValueD] = useState(userPoke.effortValueD);
  const [effortValueS, setEffortValueS] = useState(userPoke.effortValueS);

  // stateの更新に伴うform値の更新
  useEffect(() => {
    resetField('effortValueH', { defaultValue: effortValueH });
  }, [effortValueH, resetField]);
  useEffect(() => {
    resetField('effortValueA', { defaultValue: effortValueA });
  }, [effortValueA, resetField]);
  useEffect(() => {
    resetField('effortValueB', { defaultValue: effortValueB });
  }, [effortValueB, resetField]);
  useEffect(() => {
    resetField('effortValueC', { defaultValue: effortValueC });
  }, [effortValueC, resetField]);
  useEffect(() => {
    resetField('effortValueD', { defaultValue: effortValueD });
  }, [effortValueD, resetField]);
  useEffect(() => {
    resetField('effortValueS', { defaultValue: effortValueS });
  }, [effortValueS, resetField]);

  // 画面遷移
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation((f: UserPokeForm) => patchUserPoke(f), {
    onSuccess: () => {
      void queryClient.removeQueries('userPoke');
      void queryClient.resetQueries('userPokes');
    },
  });

  const onClickRoot = () => {
    void queryClient.removeQueries('userPoke');
    navigate(appConsts.url.root);
  };

  const onSubmit: SubmitHandler<UserPokeForm> = (formData) => {
    mutate(formData);
    navigate(appConsts.url.root, { replace: true });
  };

  return (
    <>
      <Helmet>
        <title>{appConsts.page.edit}</title>
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={8}>
            <header>
              <h1>{appConsts.page.edit}</h1>
              {errors.ability && (
                <Alert severity="warning">
                  {appConsts.errorMessage.ability}
                </Alert>
              )}
              {errors.waza1 && (
                <Alert severity="warning">{appConsts.errorMessage.waza}</Alert>
              )}
              {errors.effortValueH && (
                <Alert severity="warning">
                  {appConsts.errorMessage.effortValue}
                </Alert>
              )}
            </header>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                container
                rowSpacing={4}
                columnSpacing={3}
                alignItems="flex-end"
              >
                <Grid item xs={12} lg={9}>
                  <Controller
                    name="pokemon"
                    control={control}
                    render={({ field }) => (
                      <>
                        <InputLabel id="pokemon">ポケモン</InputLabel>
                        <Select
                          {...field}
                          labelId="pokemon"
                          options={[userPoke.pokemon]}
                          getOptionValue={(pokemon) => String(pokemon.id)}
                          getOptionLabel={(pokemon) =>
                            `${pokemon.name} / ${kataToHira(pokemon.name)}`
                          }
                          isDisabled
                        />
                      </>
                    )}
                  />
                </Grid>

                <Grid item xs={12} lg={3}>
                  <Controller
                    name="nickname"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="nickname"
                        label="ニックネーム"
                        variant="outlined"
                        size="small"
                        fullWidth
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                  <Controller
                    name="gender"
                    control={control}
                    render={({ field }) => (
                      <RadioGroup
                        {...field}
                        row
                        aria-label="gender"
                        name="row-radio-buttons-group"
                      >
                        {userPoke.pokemon.genderFlag ===
                          appConsts.param.gender.flag.true && (
                          <>
                            <FormControlLabel
                              value="1"
                              control={<Radio />}
                              label="♂"
                              disabled
                            />
                            <FormControlLabel
                              value="2"
                              control={<Radio />}
                              label="♀"
                              disabled
                            />
                          </>
                        )}
                        {userPoke.pokemon.genderFlag ===
                          appConsts.param.gender.flag.false && (
                          <Typography variant="body1" component="div">
                            性別なし
                          </Typography>
                        )}
                      </RadioGroup>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                  <Controller
                    name="color"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Switch
                            {...field}
                            checked={Boolean(userPoke.color)}
                            disabled
                          />
                        }
                        label="色違い"
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Controller
                    name="ball"
                    control={control}
                    render={({ field }) => (
                      <>
                        <InputLabel id="ball">ボール</InputLabel>
                        <Select
                          {...field}
                          labelId="ball"
                          options={[userPoke.ball]}
                          getOptionValue={(ball) => String(ball.id)}
                          getOptionLabel={(ball) =>
                            `${ball.name} / ${kataToHira(ball.name)}`
                          }
                          isDisabled
                        />
                      </>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <Controller
                    name="personality"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <>
                        <InputLabel id="personality">性格</InputLabel>
                        <Select
                          {...field}
                          labelId="personality"
                          options={personalitys}
                          getOptionValue={(personality) =>
                            String(personality.id)
                          }
                          getOptionLabel={(personality) =>
                            `${personality.name}`
                          }
                        />
                      </>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <Controller
                    name="ability"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <>
                        <InputLabel id="ability">特性</InputLabel>
                        <Select
                          {...field}
                          labelId="ability"
                          isClearable
                          isSearchable={false}
                          options={abilitys}
                        />
                      </>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                  <Controller
                    name="item"
                    control={control}
                    render={({ field }) => (
                      <>
                        <InputLabel id="item">もちもの</InputLabel>
                        <Select
                          {...field}
                          labelId="item"
                          isClearable
                          options={items}
                          getOptionValue={(item) => String(item.id)}
                          getOptionLabel={(item) =>
                            `${item.name} / ${kataToHira(item.name)}`
                          }
                          placeholder="もちものを選択してください"
                        />
                      </>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                  <Controller
                    name="waza1"
                    control={control}
                    rules={{
                      required: true,
                      validate: (w) =>
                        checkDuplicate(
                          [
                            w.id,
                            getValues('waza2')?.id,
                            getValues('waza3')?.id,
                            getValues('waza4')?.id,
                          ].filter(
                            (wid) =>
                              !!wid === true &&
                              wid !== appConsts.dropdown.wazaNon,
                          ),
                        ),
                    }}
                    render={({ field }) => (
                      <>
                        <InputLabel id="waza1">わざ１</InputLabel>
                        <Select
                          {...field}
                          labelId="waza1"
                          options={wazas}
                          getOptionValue={(waza) => String(waza.id)}
                          getOptionLabel={(waza) =>
                            `${waza.name} / ${kataToHira(waza.name)}`
                          }
                        />
                      </>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                  <Controller
                    name="waza2"
                    control={control}
                    render={({ field }) => (
                      <>
                        <InputLabel id="waza2">わざ２</InputLabel>
                        <Select
                          {...field}
                          labelId="waza2"
                          isClearable
                          options={wazas}
                          getOptionValue={(waza) => String(waza.id)}
                          getOptionLabel={(waza) =>
                            `${waza.name} / ${kataToHira(waza.name)}`
                          }
                          placeholder="わざを選択してください"
                        />
                      </>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                  <Controller
                    name="waza3"
                    control={control}
                    render={({ field }) => (
                      <>
                        <InputLabel id="waza3">わざ３</InputLabel>
                        <Select
                          {...field}
                          labelId="waza3"
                          isClearable
                          options={wazas}
                          getOptionValue={(waza) => String(waza.id)}
                          getOptionLabel={(waza) =>
                            `${waza.name} / ${kataToHira(waza.name)}`
                          }
                          placeholder="わざを選択してください"
                        />
                      </>
                    )}
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={3}>
                  <Controller
                    name="waza4"
                    control={control}
                    render={({ field }) => (
                      <>
                        <InputLabel id="waza4">わざ４</InputLabel>
                        <Select
                          {...field}
                          labelId="waza4"
                          isClearable
                          options={wazas}
                          getOptionValue={(waza) => String(waza.id)}
                          getOptionLabel={(waza) =>
                            `${waza.name} / ${kataToHira(waza.name)}`
                          }
                          placeholder="わざを選択してください"
                        />
                      </>
                    )}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">ステータス</TableCell>
                          <TableCell align="center">個体値</TableCell>
                          <TableCell align="center">
                            努力値 (残:&nbsp;
                            {510 -
                              effortValueH -
                              effortValueA -
                              effortValueB -
                              effortValueC -
                              effortValueD -
                              effortValueS}
                            )
                          </TableCell>
                          <TableCell align="center">実数値</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell component="th" scope="row">
                            HP
                          </TableCell>
                          <TableCell align="center">
                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} lg={6}>
                                <Controller
                                  name="individualValueH"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      required
                                      id="individualValueH"
                                      label="個体値:HP"
                                      type="number"
                                      size="small"
                                      fullWidth
                                      variant="outlined"
                                      inputProps={{
                                        shrink: true,
                                        min: 0,
                                        max: 31,
                                      }}
                                    />
                                  )}
                                />
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="center">
                            <Grid
                              container
                              columnSpacing={0.5}
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} lg={2}>
                                <Controller
                                  name="effortValueH"
                                  control={control}
                                  defaultValue={effortValueH}
                                  rules={{
                                    validate: () =>
                                      effortValueH +
                                        effortValueA +
                                        effortValueB +
                                        effortValueC +
                                        effortValueD +
                                        effortValueS <=
                                      510,
                                  }}
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      required
                                      id="effortValueH"
                                      label="努力値:HP"
                                      type="number"
                                      size="small"
                                      fullWidth
                                      variant="outlined"
                                      value={effortValueH}
                                      inputProps={{
                                        shrink: true,
                                        min: 0,
                                        max: 255,
                                      }}
                                      onChange={(e) =>
                                        setEffortValueH(Number(e.target.value))
                                      }
                                    />
                                  )}
                                />
                              </Grid>

                              <Grid item xs={12} lg={2}>
                                <ButtonGroup
                                  fullWidth
                                  size="large"
                                  variant="outlined"
                                >
                                  <Button
                                    type="button"
                                    onClick={() => setEffortValueH(0)}
                                  >
                                    0
                                  </Button>
                                  <Button
                                    type="button"
                                    onClick={() => setEffortValueH(252)}
                                  >
                                    252
                                  </Button>
                                </ButtonGroup>
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="center">
                            {getStatusH(
                              watch('pokemon').varioustaH,
                              watch('individualValueH'),
                              effortValueH,
                            )}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell component="th" scope="row">
                            攻撃
                          </TableCell>
                          <TableCell align="center">
                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} lg={6}>
                                <Controller
                                  name="individualValueA"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      required
                                      id="individualValueA"
                                      label="個体値:攻撃"
                                      type="number"
                                      size="small"
                                      fullWidth
                                      variant="outlined"
                                      inputProps={{
                                        shrink: true,
                                        min: 0,
                                        max: 31,
                                      }}
                                    />
                                  )}
                                />
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="center">
                            <Grid
                              container
                              columnSpacing={0.5}
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} lg={2}>
                                <Controller
                                  name="effortValueA"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      required
                                      id="effortValueA"
                                      label="努力値:攻撃"
                                      type="number"
                                      size="small"
                                      fullWidth
                                      variant="outlined"
                                      value={effortValueA}
                                      inputProps={{
                                        shrink: true,
                                        min: 0,
                                        max: 255,
                                      }}
                                      onChange={(e) =>
                                        setEffortValueA(Number(e.target.value))
                                      }
                                    />
                                  )}
                                />
                              </Grid>

                              <Grid item xs={12} lg={2}>
                                <ButtonGroup
                                  fullWidth
                                  size="large"
                                  variant="outlined"
                                >
                                  <Button
                                    type="button"
                                    onClick={() => setEffortValueA(0)}
                                  >
                                    0
                                  </Button>
                                  <Button
                                    type="button"
                                    onClick={() => setEffortValueA(252)}
                                  >
                                    252
                                  </Button>
                                </ButtonGroup>
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="center">
                            {getStatusAS(
                              watch('pokemon').varioustaA,
                              watch('individualValueA'),
                              effortValueA,
                              getRate(
                                watch('personality'),
                                appConsts.param.status.A,
                              ),
                            )}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell component="th" scope="row">
                            防御
                          </TableCell>
                          <TableCell align="center">
                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} lg={6}>
                                <Controller
                                  name="individualValueB"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      required
                                      id="individualValueB"
                                      label="個体値:防御"
                                      type="number"
                                      size="small"
                                      fullWidth
                                      variant="outlined"
                                      inputProps={{
                                        shrink: true,
                                        min: 0,
                                        max: 31,
                                      }}
                                    />
                                  )}
                                />
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="center">
                            <Grid
                              container
                              columnSpacing={0.5}
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} lg={2}>
                                <Controller
                                  name="effortValueB"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      required
                                      id="effortValueB"
                                      label="努力値:防御"
                                      type="number"
                                      size="small"
                                      fullWidth
                                      variant="outlined"
                                      value={effortValueB}
                                      inputProps={{
                                        shrink: true,
                                        min: 0,
                                        max: 255,
                                      }}
                                      onChange={(e) =>
                                        setEffortValueB(Number(e.target.value))
                                      }
                                    />
                                  )}
                                />
                              </Grid>

                              <Grid item xs={12} lg={2}>
                                <ButtonGroup
                                  fullWidth
                                  size="large"
                                  variant="outlined"
                                >
                                  <Button
                                    type="button"
                                    onClick={() => setEffortValueB(0)}
                                  >
                                    0
                                  </Button>
                                  <Button
                                    type="button"
                                    onClick={() => setEffortValueB(252)}
                                  >
                                    252
                                  </Button>
                                </ButtonGroup>
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="center">
                            {getStatusAS(
                              watch('pokemon').varioustaB,
                              watch('individualValueB'),
                              effortValueB,
                              getRate(
                                watch('personality'),
                                appConsts.param.status.B,
                              ),
                            )}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell component="th" scope="row">
                            特攻
                          </TableCell>
                          <TableCell align="center">
                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} lg={6}>
                                <Controller
                                  name="individualValueC"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      required
                                      id="individualValueC"
                                      label="個体値:特攻"
                                      type="number"
                                      size="small"
                                      fullWidth
                                      variant="outlined"
                                      inputProps={{
                                        shrink: true,
                                        min: 0,
                                        max: 31,
                                      }}
                                    />
                                  )}
                                />
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="center">
                            <Grid
                              container
                              columnSpacing={0.5}
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} lg={2}>
                                <Controller
                                  name="effortValueC"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      required
                                      id="effortValueC"
                                      label="努力値:特攻"
                                      type="number"
                                      size="small"
                                      fullWidth
                                      variant="outlined"
                                      value={effortValueC}
                                      inputProps={{
                                        shrink: true,
                                        min: 0,
                                        max: 255,
                                      }}
                                      onChange={(e) =>
                                        setEffortValueC(Number(e.target.value))
                                      }
                                    />
                                  )}
                                />
                              </Grid>

                              <Grid item xs={12} lg={2}>
                                <ButtonGroup
                                  fullWidth
                                  size="large"
                                  variant="outlined"
                                >
                                  <Button
                                    type="button"
                                    onClick={() => setEffortValueC(0)}
                                  >
                                    0
                                  </Button>
                                  <Button
                                    type="button"
                                    onClick={() => setEffortValueC(252)}
                                  >
                                    252
                                  </Button>
                                </ButtonGroup>
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="center">
                            {getStatusAS(
                              watch('pokemon').varioustaC,
                              watch('individualValueC'),
                              effortValueC,
                              getRate(
                                watch('personality'),
                                appConsts.param.status.C,
                              ),
                            )}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell component="th" scope="row">
                            特防
                          </TableCell>
                          <TableCell align="center">
                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} lg={6}>
                                <Controller
                                  name="individualValueD"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      required
                                      id="individualValueD"
                                      label="個体値:特防"
                                      type="number"
                                      size="small"
                                      fullWidth
                                      variant="outlined"
                                      inputProps={{
                                        shrink: true,
                                        min: 0,
                                        max: 31,
                                      }}
                                    />
                                  )}
                                />
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="center">
                            <Grid
                              container
                              columnSpacing={0.5}
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} lg={2}>
                                <Controller
                                  name="effortValueD"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      required
                                      id="effortValueD"
                                      label="努力値:特防"
                                      type="number"
                                      size="small"
                                      fullWidth
                                      variant="outlined"
                                      value={effortValueD}
                                      inputProps={{
                                        shrink: true,
                                        min: 0,
                                        max: 255,
                                      }}
                                      onChange={(e) =>
                                        setEffortValueD(Number(e.target.value))
                                      }
                                    />
                                  )}
                                />
                              </Grid>

                              <Grid item xs={12} lg={2}>
                                <ButtonGroup
                                  fullWidth
                                  size="large"
                                  variant="outlined"
                                >
                                  <Button
                                    type="button"
                                    onClick={() => setEffortValueD(0)}
                                  >
                                    0
                                  </Button>
                                  <Button
                                    type="button"
                                    onClick={() => setEffortValueD(252)}
                                  >
                                    252
                                  </Button>
                                </ButtonGroup>
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="center">
                            {getStatusAS(
                              watch('pokemon').varioustaD,
                              watch('individualValueD'),
                              effortValueD,
                              getRate(
                                watch('personality'),
                                appConsts.param.status.D,
                              ),
                            )}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell component="th" scope="row">
                            素早さ
                          </TableCell>
                          <TableCell align="center">
                            <Grid
                              container
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} lg={6}>
                                <Controller
                                  name="individualValueS"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      required
                                      id="individualValueS"
                                      label="個体値:素早さ"
                                      type="number"
                                      size="small"
                                      fullWidth
                                      variant="outlined"
                                      inputProps={{
                                        shrink: true,
                                        min: 0,
                                        max: 31,
                                      }}
                                    />
                                  )}
                                />
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="center">
                            <Grid
                              container
                              columnSpacing={0.5}
                              justifyContent="center"
                              alignItems="center"
                            >
                              <Grid item xs={12} lg={2}>
                                <Controller
                                  name="effortValueS"
                                  control={control}
                                  render={({ field }) => (
                                    <TextField
                                      {...field}
                                      required
                                      id="effortValueS"
                                      label="努力値:素早さ"
                                      type="number"
                                      size="small"
                                      fullWidth
                                      variant="outlined"
                                      value={effortValueS}
                                      inputProps={{
                                        shrink: true,
                                        min: 0,
                                        max: 255,
                                      }}
                                      onChange={(e) =>
                                        setEffortValueS(Number(e.target.value))
                                      }
                                    />
                                  )}
                                />
                              </Grid>

                              <Grid item xs={12} lg={2}>
                                <ButtonGroup
                                  fullWidth
                                  size="large"
                                  variant="outlined"
                                >
                                  <Button
                                    type="button"
                                    onClick={() => setEffortValueS(0)}
                                  >
                                    0
                                  </Button>
                                  <Button
                                    type="button"
                                    onClick={() => setEffortValueS(252)}
                                  >
                                    252
                                  </Button>
                                </ButtonGroup>
                              </Grid>
                            </Grid>
                          </TableCell>
                          <TableCell align="center">
                            {getStatusAS(
                              watch('pokemon').varioustaS,
                              watch('individualValueS'),
                              effortValueS,
                              getRate(
                                watch('personality'),
                                appConsts.param.status.S,
                              ),
                            )}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    name="remarks"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="remarks"
                        label="備考"
                        variant="outlined"
                        multiline
                        rows={4}
                        fullWidth
                      />
                    )}
                  />
                </Grid>
              </Grid>

              <Grid
                container
                rowSpacing={4}
                columnSpacing={3}
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Grid item xs={5} md={3} lg={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    size="large"
                    fullWidth
                  >
                    更新
                  </Button>
                </Grid>

                <Grid item xs={5} md={3} lg={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="button"
                    size="large"
                    fullWidth
                    onClick={() => {
                      onClickRoot();
                    }}
                  >
                    戻る
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Suspense>
    </>
  );
};

export default UserPokeEdit;
