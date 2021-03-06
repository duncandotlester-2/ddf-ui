import * as React from 'react'
import { hot } from 'react-hot-loader'
import { useBackbone } from '../selection-checkbox/useBackbone.hook'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
import sourcesInstance from '../../component/singletons/sources-instance'
import Typography from '@material-ui/core/Typography'
import Swath from '../swath/swath'
import Grid from '@material-ui/core/Grid'
import HomeIcon from '@material-ui/icons/Home'
import CloudIcon from '@material-ui/icons/Cloud'
import WarningIcon from '@material-ui/icons/Warning'
import Box from '@material-ui/core/Box'
import CheckIcon from '@material-ui/icons/Check'

type Props = {
  search: any
}

type SourcesType = ('remote' | 'local' | 'enterprise' | string)[]

const getHumanReadableSourceName = (sourceId: string) => {
  if (sourceId === 'all') {
    return 'All'
  } else if (sourceId === 'remote') {
    return (
      <>
        Slow (offsite) <CloudIcon />
      </>
    )
  } else if (sourceId === 'local') {
    return (
      <>
        Fast (onsite) <HomeIcon />
      </>
    )
  }
  return sourceId
}

const getSourcesFromSearch = ({ search }: Props): SourcesType => {
  return search.get('sources') || []
}

const isHarvested = (sourceId: string) => {
  return sourcesInstance.getHarvested().includes(sourceId)
}

const shouldBeSelected = ({
  srcId,
  sources,
}: {
  srcId: string
  sources: SourcesType
}) => {
  if (sources.includes('all')) {
    return true
  } else if (sources.includes('local') && isHarvested(srcId)) {
    return true
  } else if (
    sources.includes('remote') &&
    !isHarvested(srcId) &&
    srcId !== 'all' &&
    srcId !== 'local'
  ) {
    return true
  }
  if (sources.includes(srcId)) {
    return true
  }
  return false
}

/**
 * So we used to use two separate search properties to track sources, federation and sources.
 * If federation was enterprise, we searched everything.  If not, we looked to sources.  I also think local was a thing.
 *
 * Instead, we're going to swap to storing only one property, sources (an array of strings).
 * If sources includes, 'all' then that's enterprise.  If it includes 'local', then that means everything local.
 * If it includes 'remote', that that means everything remote.  All other values are singular selections of a source.
 */
const SourceSelector = ({ search }: Props) => {
  const inputRef = React.useRef()
  const [federation, setFederation] = React.useState(search.get(
    'federation'
  ) as 'enterprise' | 'selected' | 'local')
  const [availableSources, setAvailableSources] = React.useState(
    sourcesInstance.toJSON()
  )
  const [sources, setSources] = React.useState(getSourcesFromSearch({ search }))
  const sourceIds = availableSources.map(source => source.id)
  const defaultSources = search.get('sources') as string[]
  const validDefaultSources =
    defaultSources && defaultSources.filter(src => sourceIds.includes(src))
  const hasValidDefaultSources =
    validDefaultSources && validDefaultSources.length
  const { listenTo } = useBackbone()
  React.useEffect(() => {
    listenTo(search, 'change:federation change:sources', () => {
      setFederation(search.get('federation'))
      setSources(getSourcesFromSearch({ search }))
    })
    listenTo(sourcesInstance, 'change', () => {
      setAvailableSources(sourcesInstance.toJSON())
    })
  }, [])
  React.useEffect(
    () => {
      search.set('sources', sources)
    },
    [sources]
  )
  const availableLocalSources = availableSources.filter(availableSource => {
    return sourcesInstance.getHarvested().includes(availableSource.id)
  })
  const availableRemoteSources = availableSources.filter(availableSource => {
    return !sourcesInstance.getHarvested().includes(availableSource.id)
  })

  return (
    <div>
      <Typography className="pb-2">Data Sources</Typography>
      <TextField
        fullWidth
        variant="outlined"
        select
        SelectProps={{
          multiple: true,
          renderValue: (selected: string[]) => {
            return (
              <>
                {selected.map((src, index) => {
                  return (
                    <>
                      {index > 0 ? ', ' : ''} {getHumanReadableSourceName(src)}
                    </>
                  )
                })}
              </>
            )
          },
        }}
        value={sources}
        onChange={e => {
          let newSources = (e.target.value as unknown) as string[]
          // these first three if only apply if the value didn't previous exist (user is going from not all to 'all', etc.)
          if (
            (newSources.includes('all') && !sources.includes('all')) ||
            (newSources.includes('local') &&
              newSources.includes('remote') &&
              (!sources.includes('remote') || !sources.includes('local')) &&
              !sources.includes('all'))
          ) {
            setSources(['all'])
          } else if (
            newSources.includes('local') &&
            !sources.includes('local')
          ) {
            setSources(
              newSources.filter(val => !isHarvested(val) && val !== 'all')
            )
          } else if (
            newSources.includes('remote') &&
            !sources.includes('remote')
          ) {
            setSources(
              ['remote'].concat(
                newSources.filter(val => isHarvested(val) && val !== 'all')
              )
            )
          } else {
            // in these case, we now have to determine if we should remove all, remote, or local based on what is in newSources
            // no matter what all should be removed
            newSources = newSources.filter(src => src !== 'all')
            if (newSources.find(src => isHarvested(src))) {
              newSources = newSources.filter(src => src !== 'local')
            }
            if (newSources.find(src => !isHarvested(src))) {
              newSources = newSources.filter(src => src !== 'remote')
            }
            setSources(newSources)
          }
        }}
      >
        <MenuItem value="all">
          <Grid container alignItems="stretch" direction="row" wrap="nowrap">
            <Grid container direction="row" alignItems="center">
              <Grid item>All</Grid>
              <Grid item className="pl-2">
                {shouldBeSelected({ srcId: 'all', sources }) ? (
                  <CheckIcon />
                ) : null}
              </Grid>
            </Grid>
          </Grid>
        </MenuItem>
        {availableLocalSources.length > 0 ? (
          <MenuItem value="local">
            <Grid container alignItems="stretch" direction="row" wrap="nowrap">
              <Grid item className="pr-2">
                <Swath className="w-1 h-full" />
              </Grid>
              <Grid container direction="row" alignItems="center">
                <Grid item>Fast (onsite)</Grid>
                <Grid item className="pl-2">
                  <HomeIcon />
                </Grid>
                <Grid item className="pl-2">
                  {shouldBeSelected({ srcId: 'local', sources }) ? (
                    <CheckIcon />
                  ) : null}
                </Grid>
              </Grid>
            </Grid>
          </MenuItem>
        ) : null}
        {availableLocalSources.length > 0
          ? availableLocalSources.map((source: any) => {
              return (
                <MenuItem key={source.id} value={source.id}>
                  <Grid
                    container
                    alignItems="stretch"
                    direction="row"
                    wrap="nowrap"
                  >
                    <Grid item className="pl-2 pr-2">
                      <Swath className="w-1 h-full" />
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                      <Grid item>
                        <Box
                          color={
                            source.available ? 'text.primary' : 'secondary.main'
                          }
                        >
                          {source.id}
                        </Box>
                      </Grid>
                      <Grid item className="pl-2">
                        {source.available ? null : <WarningIcon />}
                      </Grid>
                      <Grid item className="pl-2">
                        {shouldBeSelected({ srcId: source.id, sources }) ? (
                          <CheckIcon />
                        ) : null}
                      </Grid>
                    </Grid>
                  </Grid>
                </MenuItem>
              )
            })
          : null}
        {availableRemoteSources.length > 0 ? (
          <MenuItem value="remote">
            <Grid container alignItems="stretch" direction="row" wrap="nowrap">
              <Grid item className="pr-2">
                <Swath className="w-1 h-full" />
              </Grid>
              <Grid container direction="row" alignItems="center">
                <Grid item>Slow (offsite)</Grid>
                <Grid item className="pl-2">
                  <CloudIcon />
                </Grid>
                <Grid item className="pl-2">
                  {shouldBeSelected({ srcId: 'remote', sources }) ? (
                    <CheckIcon />
                  ) : null}
                </Grid>
              </Grid>
            </Grid>
          </MenuItem>
        ) : null}
        {availableRemoteSources.length > 0
          ? availableRemoteSources.map((source: any) => {
              return (
                <MenuItem key={source.id} value={source.id}>
                  <Grid
                    container
                    alignItems="stretch"
                    direction="row"
                    wrap="nowrap"
                  >
                    <Grid item className="pl-2 pr-2">
                      <Swath className="w-1 h-full" />
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                      <Grid item>
                        <Box
                          color={
                            source.available ? 'text.primary' : 'secondary.main'
                          }
                        >
                          {source.id}
                        </Box>
                      </Grid>
                      <Grid item className="pl-2">
                        {source.available ? null : <WarningIcon />}
                      </Grid>
                      <Grid item className="pl-2">
                        {shouldBeSelected({ srcId: source.id, sources }) ? (
                          <CheckIcon />
                        ) : null}
                      </Grid>
                    </Grid>
                  </Grid>
                </MenuItem>
              )
            })
          : null}
      </TextField>
    </div>
  )
}

export default hot(module)(SourceSelector)
