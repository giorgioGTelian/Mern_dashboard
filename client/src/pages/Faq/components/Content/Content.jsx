import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqGroupItem = ({ title, items }) => {
  const theme = useTheme();
  return (
    <Box>
      <Box marginBottom={2}>
        <Typography fontWeight={700} variant={'h5'}>
          {title}
        </Typography>
      </Box>
      <Box>
        {items.map((item, i) => (
          <Box
            component={Accordion}
            key={i}
            padding={1}
            marginBottom={i === item.length - 1 ? 0 : 2}
            borderRadius={`${theme.spacing(1)} !important`}
            sx={{
              '&::before': {
                display: 'none',
              },
            }}
          >
            <Box
              component={AccordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id={`panel1a-header--${i}`}
            >
              <Typography fontWeight={600}>{item.title}</Typography>
            </Box>
            <AccordionDetails>
              <Typography color="text.secondary">{item.subtitle}</Typography>
            </AccordionDetails>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

FaqGroupItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Content = () => {
  return (
    <Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Domande frequenti'}
          items={[
            {
              title: 'Posso acquistare una licenza?',
              subtitle:
                'Sì, puoi acquistare una licenza per ogni prodotto disponibile sul nostro sito web. Dopo aver acquistato il prodotto, riceverai un codice di licenza univoco. Il codice di licenza ti darà il diritto di utilizzare il prodotto in modo continuativo.',
            },
            {
              title: "Qual'è la tua politica di rimborso?",
              subtitle:
                'Offriamo una garanzia di rimborso entro 7 giorni dall’acquisto. Se non sei soddisfatto del nostro prodotto, ti rimborseremo l’intero importo. Per ulteriori informazioni, ti preghiamo di contattarci.',
            },
            {
              title: 'Mi dai il prodotto gratis?',
              subtitle:
                'Sì, offriamo una versione gratuita per tutti i nostri prodotti. Puoi scaricare il prodotto gratuitamente e utilizzarlo per sempre. Tuttavia, la versione gratuita ha alcune limitazioni rispetto alla versione a pagamento. Le funzionalità premium sono disponibili solo per la versione a pagamento.',
            },
            {
              title: 'Posso cambiare licenza?',
              subtitle:
                'Sì, puoi cambiare la tua licenza in qualsiasi momento. Se desideri aggiornare la tua licenza, ti preghiamo di contattarci. Ti aiuteremo a cambiare la tua licenza senza alcun problema.',
            },
            {
              title: 'il Prodotto è a iscrizione?',
              subtitle:
                'No, il nostro prodotto non è a iscrizione. Una volta acquistato il prodotto, puoi utilizzarlo per sempre. Non è richiesta alcuna iscrizione mensile o annuale. Tuttavia, ti consigliamo di acquistare la nostra licenza per ricevere aggiornamenti e supporto continuativo.',
            },
          ]}
        />
      </Box>
      <Box marginBottom={6}>
        <FaqGroupItem
          title={'Account e impostazioni'}
          items={[
            {
              title: 'Cosa succede se dimentico la password?',
              subtitle:
                'Se dimentichi la tua password, puoi reimpostarla facilmente. Vai alla pagina di accesso e fai clic su "Password dimenticata". Inserisci il tuo indirizzo email e ti invieremo un link per reimpostare la tua password. Se incontri problemi, ti preghiamo di contattarci. Ti aiuteremo a recuperare la tua password.',
            },
            {
              title: 'Quando scade il mio piano attuale?',
              subtitle:
                'Puoi controllare la data di scadenza del tuo piano attuale nella tua area account. Vai alla pagina del tuo account e fai clic su "Piani". Qui troverai tutte le informazioni sul tuo piano attuale, inclusa la data di scadenza. Se desideri prolungare il tuo piano, ti preghiamo di contattarci. Ti aiuteremo a prolungare il tuo piano senza alcun problema.',
            },
            {
              title: "Che differenza c'è tra un account gratuito e uno a pagamento?",
              subtitle:
                'La differenza principale tra un account gratuito e uno a pagamento è l’accesso alle funzionalità premium. Con un account gratuito, puoi utilizzare il prodotto gratuitamente, ma con alcune limitazioni. Con un account a pagamento, puoi accedere a tutte le funzionalità premium e ricevere supporto continuativo. Ti consigliamo di acquistare un account a pagamento per ottenere il massimo dal nostro prodotto.',
            },
            {
              title: 'è possibile richiedere una feature nuova per il prodotto?',
              subtitle:
                'Sì, puoi richiedere una nuova funzionalità per il nostro prodotto. Se hai delle idee su come migliorare il nostro prodotto, ti preghiamo di contattarci. Saremo lieti di ascoltare le tue proposte e di implementare nuove funzionalità nel nostro prodotto.',
            },
            {
              title: 'Posso esportare i miei dati in un altro formato?',
              subtitle:
                'Sì, puoi esportare i tuoi dati in diversi formati, come CSV, XLS o PDF. Vai alla pagina del tuo account e fai clic su "Esporta dati". Qui troverai tutte le opzioni disponibili per esportare i tuoi dati. Se incontri problemi, ti preghiamo di contattarci. Ti aiuteremo a esportare i tuoi dati nel formato desiderato.',
            },
          ]}
        />
      </Box>
      <Box>
        <FaqGroupItem
          title={'Sicuezza e privacy'}
          items={[
            {
              title: 'Quali sono i tuoi termini di servizio?',
              subtitle:
                'I nostri termini di servizio sono disponibili sulla nostra pagina di termini e condizioni. Ti consigliamo di leggere attentamente i nostri termini di servizio prima di utilizzare il nostro prodotto. Se hai domande sui nostri termini di servizio, ti preghiamo di contattarci. Ti aiuteremo a chiarire qualsiasi dubbio tu abbia sui nostri termini di servizio.',
            },
            {
              title: 'Che sicurezza offri per i miei dati personali?',
              subtitle:
                'La sicurezza dei tuoi dati personali è la nostra massima priorità. Utilizziamo le ultime tecnologie di crittografia per proteggere i tuoi dati personali da accessi non autorizzati. Inoltre, rispettiamo rigorosamente le leggi sulla privacy e non condividiamo mai i tuoi dati personali con terzi senza il tuo consenso. Se hai domande sulla sicurezza dei tuoi dati personali, ti preghiamo di contattarci. Ti forniremo tutte le informazioni di cui hai bisogno sulla sicurezza dei tuoi dati personali.',
            },
            {
              title: 'Cosa succede se vengo hackerato?',
              subtitle:
                'Se pensi di essere stato hackerato, ti preghiamo di contattarci immediatamente. Faremo tutto il possibile per proteggere i tuoi dati e ripristinare la sicurezza del tuo account. Se hai domande sulla sicurezza del tuo account, ti preghiamo di contattarci. Ti aiuteremo a risolvere qualsiasi problema di sicurezza che potresti incontrare.',
            },
            {
              title: 'Posso vedere il mio storico di navigazione?',
              subtitle:
                'Sì, puoi vedere il tuo storico di navigazione nella tua area account. Vai alla pagina del tuo account e fai clic su "Storico di navigazione". Qui troverai tutte le informazioni sulle pagine che hai visitato e sulle azioni che hai compiuto. Se incontri problemi, ti preghiamo di contattarci. Ti aiuteremo a visualizzare il tuo storico di navigazione.',
            },
            {
              title: 'Come posso cancellare il mio account?',
              subtitle:
                'Se desideri cancellare il tuo account, ti preghiamo di contattarci. Faremo tutto il possibile per cancellare il tuo account e proteggere i tuoi dati personali. Se hai domande sulla cancellazione del tuo account, ti preghiamo di contattarci. Ti aiuteremo a cancellare il tuo account senza alcun problema.',
            },
          ]}
        />
      </Box>
    </Box>
  );
};

export default Content;
